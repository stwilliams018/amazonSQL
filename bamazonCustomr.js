var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Panic009",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  pullData()
});

function pullData() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log('')
      console.log('--------------------------------------------------------------------------------------------')
      console.log('                                   Welcome to the Store                                     ')
      console.log ('                                   Items ready for Sale                                    ')
      console.log('--------------------------------------------------------------------------------------------')

      for (i=0; i<res.length; i++){
          console.log('ID: ' + res[i].id +' - Product:' + res[i].product_name + ' - Department: ' + res[i].department_name + ' - Price:' + res[i].price + ' - In Stock: ' + res[i].stock_quantity)
      }
      //console.log(res);
      askQuestions();
    });
}

function askQuestions(){
    inquirer.prompt([{
        type : 'input',
        name: 'PurchaseID',
        message: 'Please select the product ID you wish to purchase',
        validate : function(input){
        if (isNaN(input)== false && parseInt(input) <= 10 && parseInt(input) > 0) {
            return true;
            }
        else{
            return false;
            }
        },
    },{
        type : 'input',
        name: 'PurchaseQuantity',
        message: 'How many would you like to purchase?',
        validate : function(input){
            if (isNaN(input)== false) {
                return true;
                }
            else{
                return false;
                }
            },
    }

]).then(function(validate){
    connection.query('SELECT * FROM products WHERE id =?',[validate.PurchaseID], function(err,res){
        //console.log(res);

        console.log (res[0].stock_quantity)
            console.log (validate.PurchaseQuantity)
        if (res[0].stock_quantity < validate.PurchaseQuantity){
            console.log ("--------------------------------------------------------------------------------------------")
            console.log ("                                   Insufficient Quantity on hand                            ")
            console.log ("                        You will now be returned to make another selection                  ")
            console.log ("--------------------------------------------------------------------------------------------")
            pullData()
            
        }
        else{
            Amt = res[0].price * validate.PurchaseQuantity;
            pID = validate.PurchaseID
            Qty = res[0].stock_quantity - validate.PurchaseQuantity;
            var query = "update products set stock_quantity = "+ Qty+ " where id = " +pID
            console.log ("$$$",query)
            console.log('')
            console.log ("-------------------------------------------------------------------------------------------");
            console.log ("                                Thank You for the Purchase                                 ");
            console.log ("                              You total today comes to $"+ Amt+"                           ");
            console.log ("                        We currently have "+ Qty +" left for purchase                      ");
            console.log ("                      You will now be directed back to the inventory page                      ");                
            console.log ("-------------------------------------------------------------------------------------------");
            connection.query(query,
            function(err,res){})
            pullData()
           //console.log (err,res)
            console.log(Qty)
        }})
        
    })
  
}
