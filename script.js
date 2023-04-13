/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

function reset(event){

		
		for(let box of boxes){

				box.classList.remove("schiarisci");
				box.classList.remove("sfondo");
				box.classList.remove("trasparenza");

				console.log('PROVA');
				map={one:0,
				two:0,
				three:0};	


				let Immdiv=document.querySelectorAll('article .checkbox');


				for(let img of Immdiv){ 
						img.src="images/unchecked.png";

				}


				box.addEventListener('click',MettiSpunta);

		}

		const divs=document.querySelector('.stile');
		divs.remove();





}
function 	visualizzaRisultato(choiceId) {
	let article=document.querySelector("article");
	let div=document.createElement('div');
	article.appendChild(div);
	div.classList.add("stile");
	let h1=document.createElement('h1');
	div.appendChild(h1);
	h1.textContent=RESULTS_MAP[choiceId].title;
	let p=document.createElement('p');
	div.appendChild(p);
	p.textContent=RESULTS_MAP[choiceId].contents;

	let bottone_reset=document.createElement('button');
	div.appendChild(bottone_reset);
	bottone_reset.textContent="RICOMINCIA QUIZ";
	bottone_reset.addEventListener('click',reset);
	
	

}

function verificaRisultato() {
	counter=0;
	let risultato; 
	
		if(map.one===map.two){
			counter++;
			risultato=map.one;
		}
		if(map.one === map.three){
			counter++;
			risultato=map.one;
		}
		if(map.two===map.three){
			counter++;
			risultato=map.two;
		}
		if(counter===0){
			visualizzaRisultato(map.one);  // in questo modo se sono tutti diversi ovvero counter=0 visualizziamo il contenuto del primo
		}
		if(counter!==0){
					visualizzaRisultato(risultato);


		}
	}


function MettiSpunta(event) {
 
	
	const box = event.currentTarget;

	takenBox[box.dataset.questionId] = box.dataset.choiceId;
const choiceId=box.dataset.choiceId;
const questionId=box.dataset.questionId;

	  let image=box.querySelector(".checkbox");
	 const percorso_completo=image.src;


	 	

	 	for(ciccio of boxes){
	 		if(ciccio.dataset.questionId !== questionId){
						let immaggine=document.querySelector('img');
						immaggine = "images/unchecked.png"; 	 				
	 		}

	 	}


	
box.src="images/checked.png";
const percorso_segnato=box.src;

console.log(image.src); // è il path lungo
	
		let grid=box.parentNode.querySelectorAll('div')
		console.log(grid);

	for(let check of grid)
	{
		const divtras=check.querySelectorAll(".checkbox")
		for(let img of divtras)
		{
			if (img.src="images/unchecked.png" ) 
			{
				check.classList.add("trasparenza");
check.classList.remove("sfondo");
			}
			
		}
	}

   
	if(percorso_completo.substring(percorso_completo.indexOf("images/"))==="images/unchecked.png")
{
	
	image.src="images/checked.png"
box.classList.remove("trasparenza");

box.classList.add("schiarisci");
box.classList.add("sfondo");

//incrementa();
	//	console.log conta;

}
else
{
		image.src="images/checked.png"
	for(let check of grid)
	{
		const divrest=check.querySelectorAll(".checkbox")
			for(let img of divrest)
			{
			box.classList.remove("trasparenza");
			box.classList.add("schiarisci");
			box.classList.add("sfondo");
			//decrementa();
			
			}
	}		
}

	
	aggiornaRisultati(questionId,choiceId);
	console.log(conta);
			

	if(controllaconta()===3){



	for(const box of boxes){
	box.removeEventListener('click',MettiSpunta);	
	}
	verificaRisultato();



	}
 
	
}

function controllaconta()
{
	
conta =0;



console.log("Scioa");

		
		let div=document.querySelectorAll(".checkbox");
		console.log(div);

		for (img of div) 
		{
			 
			 const path_img=img.src;
			 const path_corto=path_img.substring(path_img.indexOf("images/"));
			console.log(path_corto);
			
				if(path_corto==="images/checked.png"){
					conta++;
					console.log(conta);
				}
				
					
			
		}


return conta;


}


function aggiornaRisultati(questionId,choiceId){
	if(questionId==="one"){
		map.one=choiceId;
	}
	if(questionId==="two"){
		map.two=choiceId;
	}
	if(questionId==="three"){
		map.three=choiceId;
	}
}
//MAIN()
let i=0;
let counter=0;
	let conta=0;	
	let map={one:0,
			two:0,
			three:0};		
let takenBox={};
const  boxes= document.querySelectorAll(".choice-grid div");  

for(const box of boxes ){
box.addEventListener('click',MettiSpunta);

}

