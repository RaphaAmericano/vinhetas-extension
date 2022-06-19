// const text = document.getElementById( 'notify-text' );
// const notify = document.getElementById( 'notify-button' );
// const reset = document.getElementById( 'notify-reset' );
// const counter = document.getElementById( 'notify-count' );



// chrome.storage.local.get( ['notifyCount'], data => {
// 	let value = data.notifyCount || 0;
// 	counter.innerHTML = value;
// } );

// chrome.storage.onChanged.addListener( ( changes, namespace ) => {
// 	if ( changes.notifyCount ) {
// 		let value = changes.notifyCount.newValue || 0;
// 		counter.innerHTML = value;
// 	}
// });

// reset.addEventListener( 'click', () => {
// 	chrome.storage.local.clear();
// 	text.value = '';
// } );

// notify.addEventListener( 'click', () => {
// 	chrome.runtime.sendMessage( '', {
// 		type: 'notification',
// 		message: text.value
// 	});
// } );

const brazil = document.getElementById('brazil-button')
const ratinho = document.getElementById('ratinho-button')
const tetra = document.getElementById('tetra-button')
const senna = document.getElementById('senna-button')
const faustao = document.getElementById('faustao-button')
const arquivo = document.getElementById('arquivo-confidencial-button')
const kasino = document.getElementById('kasino-button')
const marcelo = document.getElementById('marcelo-button')
const fluminense = document.getElementById('fluminense-button')
const beto = document.getElementById('beto-carreiro-button')
const ibagem = document.getElementById('ibagem-button')
const gugu = document.getElementById('gugu-button');
const peao = document.getElementById('peao-button');
const praca = document.getElementById('praca-button');
const arquivox = document.getElementById('arquivo-x')

brazil.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/efeitos-sonoros-brasil-sil-sil-rede-globo.mp3')
	audio.play();
});
ratinho.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/ratinhooo_1.mp3');
	audio.play();
});

tetra.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/vinheta-galvao-do-tetra.mp3');
	audio.play();
});
senna.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/ayrton-senna-tema-da-vitoria.mp3');
	audio.play();
});
faustao.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/faustao-errou.mp3');
	audio.play();
});
arquivo.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/domingao-do-faustao-arquivo-confidencial-convert-video-online.mp3');
	audio.play();
});
kasino.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/ae-kasinao_4.mp3');
	audio.play();
});
marcelo.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/corta-pra-mim-marcelo-rezende.mp3');
	audio.play();
});
fluminense.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/fluminense-radio-globo.mp3');
	audio.play();
});
beto.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/beto-carreiro.mp3');
	audio.play();
});
ibagem.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/datena_2.mp3');
	audio.play();
});
gugu.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/que-que-isso-gugu.mp3');
	audio.play();
});
peao.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/peao.mp3');
	audio.play();
});
praca.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/a-mesma-praca_1.mp3');
	audio.play();
});
arquivox.addEventListener('click', () => {
	const audio = new Audio('https://www.myinstants.com/media/sounds/xfiles-theme.mp3');
	audio.play();
})