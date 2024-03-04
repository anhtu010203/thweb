
quesTionp1=[
    { 
        content:"Câu 1: Năm 2024 có bao nhiêu ngày?",
        A:"364",
        B:"365",
        C:"366",
        D:"400"
    },
    { 
        content:"Năm 2024 có bao nhiêu ngày?",
        A:"364",
        B:"365",
        C:"366",
        D:"400"
    },
    { 
        content:"Năm 2024 có bao nhiêu ngày?",
        A:"364",
        B:"365",
        C:"366",
        D:"400"
    },
    { 
        content:"Năm 2024 có bao nhiêu ngày?",
        A:"364",
        B:"365",
        C:"366",
        D:"400"
    },
]

function loadPart1(){
    let place = document.querySelector("#part1-out");
    console.log('place: ', place)
    let out = "";
    for (let qs of quesTionp1){
        out+=`
        <div class="box">
            <p class="ques">${qs.content.toString()}</p>
            <div class="asw-container">
            <div class="asw">
                <input name=part1-answer type="radio" class="part1-answer"/>${qs.A.toString()}
            </div>
            <div class="asw">
                <input name=part1-answer type="radio" class="part1-answer"/>${qs.B.toString()}
            </div>
            <div class="asw">
                <input name=part1-answer type="radio" class="part1-answer"/>${qs.C.toString()}
            </div>
            <div class="asw">
                <input name=part1-answer type="radio" class="part1-answer"/>${qs.D.toString()}
            </div>
            </div>
        </div>
        `;
    }
    place.innerHTML=out;
}
loadPart1()