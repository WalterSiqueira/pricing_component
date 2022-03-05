var basic_month = document.getElementById('basic_monthly');
var basic_annual = document.getElementById('basic_annual');
var pro_month = document.getElementById('pro_monthly');
var pro_annual = document.getElementById('pro_annual');
var master_month = document.getElementById('master_monthly');
var master_annual = document.getElementById('master_annual');
var toggle = document.getElementById('toggle');
var status = 'annual';
toggle.addEventListener("click",change);

function change() {
    if (status === "annual") {
        status = 'month';
        basic_annual.style.display = "none";
        master_annual.style.display = "none";
        pro_annual.style.display = "none";
        pro_month.style.display = "initial";
        master_month.style.display = "initial";
        basic_month.style.display = "initial";
        console.log(status);
    } else if (status === "month") {
        status = 'annual';
        basic_annual.style.display = "initial";
        master_annual.style.display = "initial"; 
        pro_annual.style.display = "initial";
        pro_month.style.display = "none";
        master_month.style.display = "none";
        basic_month.style.display = "none";
        console.log(status);
        
    }
}