const tipButtons = document.querySelectorAll('.tip')

function clearTip() {
    tipButtons.forEach(btn=>{
        btn.classList.remove('selected')
    })
}

function setAmount(amount) {
    document.querySelector('[splitter=tipAmount]')
           .innerText = `$${amount.toFixed(2)}`
}

function setTotal(total) {
    document.querySelector('[splitter=total]')
                .innerText = `$${total.toFixed(2)}`
}

function toggleSelected() {
    clearTip()
    this.classList.toggle('selected')
}

tipButtons.forEach(button=>{
    button.addEventListener('click', toggleSelected)
})

function calc() {
    const billValue = document.querySelector('[splitter=billValue]'),
        numberOfPeople = document.querySelector('[splitter=numberOfPeople]'),
        selected = document.querySelector('.selected')
    if (
        billValue.value == false ||
        billValue.value <= 0 ||
        numberOfPeople.value == false ||
        numberOfPeople.value <= 0 ||
        selected == null
        ){
            throw('type something good, you fool')
        }else{
            const tip = billValue.value * (selected.value / 100),
                amount = tip / numberOfPeople.value,
                total = billValue.value / numberOfPeople.value + amount

            setAmount(amount)
            
            setTotal(total)
        }
       try{
           
    }catch{
           alert('message')
       }
}

document.querySelector('[splitter=calc]').addEventListener('click', calc)

document.querySelector('[splitter=reset]').addEventListener('click', e=>{
    window.location.reload()
})