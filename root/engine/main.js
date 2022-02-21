let slider = document.getElementById('myRange');
let viewN = document.getElementById('views_value');
let monthN = document.getElementById('value');
let sw = document.getElementById('sw_input');
let payperMethod = document.getElementById('month');
let state = "monthly";
function setPayMethod() {
    if (state == "monthly") {
         payperMethod.textContent = "/month"
    } else if (state == "yearly") {
         payperMethod.textContent = "/year"
    }
}
function sliderValue() {
    if (slider.value == 0){
        if (state == "monthly") {
            viewN.innerHTML = "0k";
            monthN.innerHTML = "$0.00"
        } else if (state == "yearly"){
            viewN.innerHTML = "0k";
            monthN.innerHTML = "$0.00"
        }
    } else if (slider.value == "10") {
        if (state == "monthly") {
            viewN.innerHTML = "10k";
            monthN.innerHTML = "$8.00"; 
        } else if (state == "yearly"){
            viewN.innerHTML = "10k";
            let discountValue = ((96.00/10) * 2) + ((96.00/10) / 2) 
            toString(discountValue)
            monthN.innerHTML = discountValue.toFixed(2); 
        } 
    } else if (slider.value == "20") {
        if (state == "monthly") {
            viewN.innerHTML = "20k";
            monthN.innerHTML = "$12.00"; 
        } else if (state == "yearly"){
            viewN.innerHTML = "20k";
            let discountValue = ((144.00/10) * 2) + ((144.00/10) / 2) 
           toString(discountValue); 
            monthN.innerHTML = discountValue.toFixed(2);
         
        } 
    } else if (slider.value == "30") {
        if (state == "monthly") {
            viewN.innerHTML = "30k";
            monthN.innerHTML = "$24.00"; 
        } else if (state == "yearly"){
            viewN.innerHTML = "30k";
            let discountValue = ((288.00/10) * 2) + ((288.00/10) / 2) 
            toString(discountValue)
           monthN.innerHTML = discountValue.toFixed(2); 

        } 
    } else if (slider.value == "40") {
        if (state == "monthly") {
            viewN.innerHTML = "40k";
            monthN.innerHTML = "$34.00"; 
        } else if (state == "yearly"){
            viewN.innerHTML = "40k";
            let discountValue = ((408.00/10) * 2) + ((408.00/10) / 2) 
            toString(discountValue)
            monthN.innerHTML = discountValue.toFixed(2); 
        } 
    } else if (slider.value == "50") {
        if (state == "monthly") {
            viewN.innerHTML = "50k";
            monthN.innerHTML = "$44.00";
        } else if (state == "yearly"){
            viewN.innerHTML = "50k";
            let discountValue = ((528.00/10) * 2) + ((528.00/10) / 2) 
            toString(discountValue)
            monthN.innerHTML = discountValue.toFixed(2); 
        }
    } else if (slider.value == "60") {
        if (state == "monthly") {
            viewN.innerHTML = "60k";
            monthN.innerHTML = "$54.00"; 
        } else if (state == "yearly"){
            viewN.innerHTML = "60k";
            let discountValue = ((608.00/10) * 2) + ((608.00/10) / 2) 
            toString(discountValue)
            monthN.innerHTML = discountValue.toFixed(2); 
        } 
    } else if (slider.value == "70") {
        if (state == "monthly") {
            viewN.innerHTML = "70k";
            monthN.innerHTML = "$64.00"; 
        } else if (state == "yearly"){
            viewN.innerHTML = "70k";
            let discountValue = ((724.00/10) * 2) + ((724.00/10) / 2) 
            toString(discountValue)
            monthN.innerHTML = discountValue.toFixed(2); 
        } 
    } else if (slider.value == "80") {
        if (state == "monthly") {
            viewN.innerHTML = "80k";
            monthN.innerHTML = "$74.00"; 
        } else if (state == "yearly"){
            viewN.innerHTML = "80k"; 
            let discountValue = ((848.00/10) * 2) + ((848.00/10) / 2) 
            toString(discountValue)
            monthN.innerHTML = discountValue.toFixed(2); 
        } 
    } else if (slider.value == "90") {
        if (state == "monthly") {
            viewN.innerHTML = "90k";
            monthN.innerHTML = "$84.00"
        } else if (state == "yearly"){
            viewN.innerHTML = "90k"; 
            let discountValue = ((968.00/10) * 2) + ((968.00/10) / 2) 
            toString(discountValue)
            monthN.innerHTML = discountValue.toFixed(2); 
        } 
    } else if (slider.value == "100") {
        if (state == "monthly") {
            viewN.innerHTML = "100k";
            monthN.innerHTML = "$94.00"
        } else if (state == "yearly"){
            viewN.innerHTML = "100k"; 
            let discountValue = ((1128.00/10) * 2) + ((1128.00/10) / 2) 
            toString(discountValue)
            monthN.innerHTML = discountValue.toFixed(2); 
        } 
    }
};
function testMY() {
    if(state == "yearly") {
        state = "monthly" 
    } else if (state == "monthly") {
        state = "yearly"  
    }
}

sw.addEventListener("click", () => {
    testMY();
    setPayMethod();
});
slider.addEventListener("change", sliderValue);
