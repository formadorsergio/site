
	var canvas = document.getElementById('jogodacobra');
	var ctxt = canvas.getContext('2d');
	var bloco_jogo = 20;
	var cobra = [{x:5,y:5,v:0.1,dxx:0,dyy:0},{x:4,y:5,v:0.1,dxx:0,dyy:0},{x:3,y:5,v:0.1,dxx:0,dyy:0},{x:2,y:5,v:0.1,dxx:0,dyy:0}

,{x:1,y:5,v:0.1,dxx:0,dyy:0},{x:0,y:5,v:0.1,dxx:0,dyy:0}];
	var direcaoCobra = '';
	var maca = {x:Math.floor(Math.random()*canvas.width/bloco_jogo),
		y:Math.floor(Math.random()*canvas.height/bloco_jogo)	
		    };
	
	function moveacobra(){

		cobra[0].x += cobra[0].v * cobra[0].dxx;
		cobra[0].y += cobra[0].v * cobra[0].dyy;

		ctxt.clearRect(0,0,canvas.width,canvas.height);
		ctxt.strokeStyle='black';
		ctxt.strokeRect(0,0,canvas.width,canvas.height);

			ctxt.strokeStyle='orange';
			ctxt.strokeRect(maca.x*bloco_jogo,maca.y*bloco_jogo,bloco_jogo,bloco_jogo);
			ctxt.fillStyle="#ff3311";
			ctxt.fillRect(maca.x*bloco_jogo,maca.y*bloco_jogo,bloco_jogo,bloco_jogo);

		for(i=0;i<cobra.length;i++){

			ctxt.strokeStyle='lightgreen';
			ctxt.strokeRect(cobra[i].x*bloco_jogo,cobra[i].y*bloco_jogo,bloco_jogo,bloco_jogo);

		}

		const head = {... cobra[0]};
		cobra.unshift(head);

		if(direcaoCobra === 'dir') {cobra[0].dxx=1;cobra[0].dyy=0;cobra[0].x += cobra[0].v * cobra[0].dxx;}
		if(direcaoCobra === 'esq') {cobra[0].dxx=-1;cobra[0].dyy=0;cobra[0].x += cobra[0].v * cobra[0].dxx;}
		if(direcaoCobra === 'bai') {cobra[0].dyy=1;cobra[0].dxx=0;cobra[0].y += cobra[0].v * cobra[0].dyy;}
		if(direcaoCobra === 'cim') {cobra[0].dyy=-1;cobra[0].dxx=0;cobra[0].y += cobra[0].v * cobra[0].dyy;}

		if(cobra[0].x+1 > maca.x && maca.x > cobra[0].x-1 &&
		   cobra[0].y+1 > maca.y && maca.y > cobra[0].y-1){

		maca = {x:Math.floor(Math.random()*canvas.width/bloco_jogo),
			y:Math.floor(Math.random()*canvas.height/bloco_jogo)	
		    };
	

		}else{cobra.pop();}


		requestAnimationFrame(moveacobra);

	}

	moveacobra();

	document.addEventListener('keydown',(e)=>{

		if(e.key == 'ArrowLeft' && direcaoCobra != 'dir') direcaoCobra = 'esq';
		if(e.key == 'ArrowRight' && direcaoCobra != 'esq') direcaoCobra = 'dir';
		if(e.key == 'ArrowUp' && direcaoCobra != 'bai') direcaoCobra = 'cim';
		if(e.key == 'ArrowDown' && direcaoCobra != 'cim') direcaoCobra = 'bai';
        e.preventDefault();
	});