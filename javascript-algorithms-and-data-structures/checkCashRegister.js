function checkCashRegister(price, cash, cid) {
    let dict_2 = {"PENNY": 0.01,
                  "NICKEL": 0.05,
                  "DIME": 0.1, 
                  "QUARTER": 0.25,
                  "ONE": 1, 
                  "FIVE": 5, 
                  "TEN": 10,
                  "TWENTY":20,
                  "ONE HUNDRED" : 100}
  
      let total_money = 0;
      let change = cash - price;
      let give_back = change;
      let coins_back = [];
      for(let i = cid.length - 1; i >= 0; i--){
        let currency = cid[i][0];
        let total = cid[i][1];
        total_money += total;
        let coin = dict_2[currency];
        if (coin <= give_back){
          
          if((total > 0) &&(give_back > 0)){
            let money_payable = 0;
            if(total == give_back){
              money_payable = total;
            } else if(total > give_back){
              let max_coins_payable = Math.floor(give_back/coin);
              money_payable = max_coins_payable * coin;
            } else{
              let max_coins = Math.floor(total/coin);
              money_payable = max_coins * coin;
            }
            coins_back.push([currency, money_payable])
             give_back = Math.round((give_back - money_payable) * 100)/100
          }
         
          
        }
      }
  
  
      if(total_money == change){
        return {"status": "CLOSED", "change": cid}
      } else if(total_money < change){
       return {"status": "INSUFFICIENT_FUNDS", "change": []}
      } else{
        if(give_back > 0){
          return {"status": "INSUFFICIENT_FUNDS",
                             "change": []}
        } else {
          return {"status": "OPEN", "change": coins_back}
        }
        
      }
  
  }