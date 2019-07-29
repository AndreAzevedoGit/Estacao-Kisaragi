$("#Escolhas").hide();


var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}
function insertMessage(msg) {

  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  $('.message-input').val(null);
  updateScrollbar();
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

function fakeMessage(mensagem, usuariodamsg, tempo, donodotopico) {

  if ($('.message-input').val() != '') {
    return false;
  }
  if (donodotopico == 0){
    updateScrollbar();
    setTimeout(function() {
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar"><img src="imagens/'+usuariodamsg+'foto.jpg" /></figure>' + mensagem + '</div>').appendTo($('.mCSB_container')).addClass('new');
      $('<div class="timestamp">'+ usuariodamsg +'</div>').appendTo($('.message:last'));
      updateScrollbar();
      $('<div class="message loading new"><figure class="avatar"><img src="imagens/typing.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
      i++;
    }, tempo );
  }

  if (donodotopico == 1){
    updateScrollbar();
    setTimeout(function() {
      $('.message.loading').remove();
      $('<div class="message admin"><figure class="avatar"><img src="imagens/'+usuariodamsg+'foto.jpg" /></figure>' + mensagem + '</div>').appendTo($('.mCSB_container')).addClass('new');
      $('<div class="timestamp">'+ usuariodamsg +'</div>').appendTo($('.message:last'));
      updateScrollbar();
      $('<div class="message loading new"><figure class="avatar"><img src="imagens/typing.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
      i++;
    }, tempo );
  }

}


function NovoTopico(tempo){
  setTimeout(function(){ $('<div class="NovoTopico">NOVO SUB-TOPICO</div>').appendTo($('.mCSB_container')); }, tempo);
  $('.message.loading').remove();
}

function AdicionarEscolhas(msg, numero){
  $('.message.loading').remove();
 $('<button type="submit" id="Escolha" onclick="Escolha('+ numero + ')" class="BotaoEscolha">'+ msg +'</button>').appendTo($('.Escolhas'));
}

function DeletarEscolhas(quantas){
  for (i = 0; i < quantas; i++){
    $('#Escolha').remove();
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checarCookie() {
  var save = getCookie("save");
  if (save != "") {
   Escolha(save);
  } else {
    Escolha(0);
  }
}

window.onload = function () { 
  checarCookie();
}

function Escolha(NumeroDaEscolha){
  EscolhaAparente = 0;
  $( "#Escolhas" ).hide( "slow", function() {
    });

  if (NumeroDaEscolha == 0){
    //Importante ser dito que o tempo não é reinciado a cada chamada da função fake message
    //Ou seja, da primeira pra segunda vai 2 segundos, da segunda pra terceira apenas 1
    fakeMessage("Então foi assim que eu descobri que gatos são espiões da CIA","semnick",1000,1);
    fakeMessage("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK AH NAO vei cala boca","trolldoninenine",4000,0);
    fakeMessage("Talvez seja só minha imaginação... mas posso postar uma coisa?","Hasumi",8000,0);
    fakeMessage("Vá em frente","noobmaster69",11000,0);
    fakeMessage("O que aconteceu?","semnick",14000,1);
    AdicionarEscolhas("Claro", 1);
    AdicionarEscolhas("Espero que não seja sobre gatos de novo", 2);
    //NovoTopico(14000);
    //fakeMessage("Então foi assim que eu descobri que gatos são espiões da CIA","Hatsumi",15000,1);
    setTimeout(function(){  $( "#Escolhas" ).show( "slow", function() {$('.message.loading').remove();});}, 15000,0);
  }


  if (NumeroDaEscolha == 1){
      document.cookie = "save=1";
      DeletarEscolhas(2);
      insertMessage("Claro");
      NovoTopico(2000);
      fakeMessage("Eu estou andando de trem faz algum tempo, mas algo está errado.","Hasumi",6000,1);
      fakeMessage("Hmm...","noobmaster69",8500,0);
      fakeMessage("Eu sempre pego esse trem para ir ao trabalho. Mas ele não parou em nenhuma estação nos últimos vinte minutos mais ou menos.","Hasumi",11000,1);
      fakeMessage("Geralmente eu demoro cinco, sete, no máximo oito minutos...","Hatsumi",14000,1);
      fakeMessage("Ah, há mais cinco outros passageiros comigo no vagão, mas eles estão todos dormindo","Hasumi",19000,1);
      
      AdicionarEscolhas("Tente acordar um dos passageiros e pergunte em que trem está", 3);
      AdicionarEscolhas("Não pegou um trem expresso por engano?", 4);
      setTimeout(function(){  $( "#Escolhas" ).show( "slow", function() {$('.message.loading').remove();})}, 19000);
      $('.message.loading').remove();
  }

  if (NumeroDaEscolha == 2){
      document.cookie = "save=2";
      insertMessage("Espero que não seja sobre gatos de novo");
      fakeMessage("Eii eu li isso!","semnick",3000,0);
      NovoTopico(4000);
      fakeMessage("Eu estou andando de trem faz algum tempo, mas algo está errado.","Hasumi",6000,1);
      fakeMessage("Hmm...","noobmaster69",8500,0);
      fakeMessage("Eu sempre pego esse trem para ir ao trabalho. Mas ele não parou em nenhuma estação nos últimos vinte minutos mais ou menos.","Hasumi",11000,1);
      fakeMessage("Geralmente eu demoro cinco, sete, no máximo oito minutos...","Hasumi",14000,1);
      fakeMessage("Ah, há mais cinco outros passageiros comigo no vagão, mas eles estão todos dormindo","Hasumi",19000,1);
      DeletarEscolhas(2);
      AdicionarEscolhas("Tente acordar um dos passageiros e pergunte em que trem está", 3);
      AdicionarEscolhas("Não pegou um trem expresso por engano?", 4);
      setTimeout(function(){  $( "#Escolhas" ).show( "slow", function(    ) {$('.message.loading').remove();});}, 19000);
      
  }

  if (NumeroDaEscolha == 3){
      document.cookie = "save=3";
      insertMessage("Tente acordar um dos passageiros e pergunte em que trem está");
      fakeMessage("É verdade!, isso parece uma boa","semnick",4500,0);
      fakeMessage("Ok, vou tentar e volto em 5 minutos...","Hasumi",7000,1);
      setTimeout(function(){insertMessage("Boa sorte");  $('.message.loading').remove();}, 9000);
      DeletarEscolhas(2);

      
  }
}