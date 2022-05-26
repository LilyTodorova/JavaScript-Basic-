function tradeCommissions(input) {
    const city = input[0];
    const salesVolume = Number(input[1]);
    let commission = 0;

    if (city == "Sofia") {
        if (salesVolume>=0 && salesVolume<=500) {
            commission = salesVolume * 0.05;
            console.log(commission.toFixed(2));
        } else if (salesVolume>500 && salesVolume<=1000) {
            commission = salesVolume * 0.07;
            console.log(commission.toFixed(2));
        } else if (salesVolume > 1000 && salesVolume<= 10000) {
            commission = salesVolume * 0.08;
            console.log(commission.toFixed(2));
        } else if (salesVolume >10000) {
            commission = salesVolume * 0.12;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }           
    } else if (city == "Varna") {
        if (salesVolume>=0 && salesVolume<=500) {
            commission = salesVolume * 0.045;
            console.log(commission.toFixed(2));
        } else if (salesVolume>500 && salesVolume<=1000) {
            commission = salesVolume * 0.075;
            console.log(commission.toFixed(2));
        } else if (salesVolume > 1000 && salesVolume<= 10000) {
            commission = salesVolume * 0.1;
            console.log(commission.toFixed(2));
        } else if (salesVolume >10000) {
            commission = salesVolume * 0.13;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }           
    } else if (city == "Plovdiv") {
        if (salesVolume>=0 && salesVolume<=500) {
            commission = salesVolume * 0.055;
            console.log(commission.toFixed(2));
        } else if (salesVolume>500 && salesVolume<=1000) {
            commission = salesVolume * 0.08;
            console.log(commission.toFixed(2));
        } else if (salesVolume > 1000 && salesVolume<= 10000) {
            commission = salesVolume * 0.12;
            console.log(commission.toFixed(2));
        } else if (salesVolume >10000) {
            commission = salesVolume * 0.145;
            console.log(commission.toFixed(2));
        } else {
            console.log("error");
        }           
    }else {
        console.log("error")
    }
}
tradeCommissions(["Sofia",
"500"])




//Град	/0 ≤ s ≤ 500/	500 < s ≤ 1 000/	1 000 < s ≤ 10 000/	s > 10 000
//Sofia	     5%	                 7%	                8%	            12%
//Varna	     4.5%	             7.5%	            10%	            13%
//Plovdiv	 5.5%	              8%	            12%	           14.5%

