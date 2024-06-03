document.getElementById('convert').addEventListener('click',()=>{
    let mins = document.getElementById('Minutes').value;
    const secs = 60;

    document.getElementById('totalSeconds').value = mins * secs + " Seconds"
    // console.log("I miss u more than anything")
})