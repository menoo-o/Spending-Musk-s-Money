const quantityInputs = document.querySelectorAll('.qty');
const buyBtns = document.querySelectorAll('.buy');
const sellBtns = document.querySelectorAll('.sell');

let muskDollars = 250000000000; // muskDollars $250 billion
let totalSpend = 0; // Initialize totalSpend to 0



quantityInputs.forEach(function (input) {
    input.addEventListener('input', remainingMoney);
});




buyBtns.forEach(button => {
    button.addEventListener('click', function(event){
        var buyInput = event.target.closest('.box1').querySelector('.qty');
        buyInput.stepUp();
        remainingMoney();
    });
});



sellBtns.forEach(button => {
    button.addEventListener('click', function(event){
        var sellInput = event.target.closest('.box1').querySelector('.qty');
        sellInput.stepDown();
        remainingMoney();
    });
});


function remainingMoney() {
    totalSpend = 0; // Reset totalSpend before recalculating

    quantityInputs.forEach(function (input) {
        let enteredQty = input;
        var quantity = parseInt(enteredQty.value, 10);

        let boxDiv = enteredQty.closest('.box1');

        // price is just a number so dont worry about that
        var price = parseFloat(boxDiv.querySelector('.cost').textContent.replace(/,/g, ''));
        console.log('this is price: ' + price);

        // Check if the quantity is a valid number
        if (isNaN(quantity) || quantity < 0) {
            quantity = 0;
            enteredQty.value = 0;
        }

        totalSpend += price * quantity;
    });

    let remainingBudget = muskDollars - totalSpend;

    // Update the remaining budget

    if(remainingBudget===0 || remainingBudget<0){
        document.getElementById('paisa').textContent =  'You Spend All the money$';
    }else{
    
    document.getElementById('paisa').textContent =  remainingBudget;
    }
}
