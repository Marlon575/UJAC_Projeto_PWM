

function validarNumero(valor) {
  return /^[0-9]+$/.test(valor.trim());
}

function validarTexto(valor) {
  return /^[a-zA-ZÀ-ÿ\s]+$/.test(valor.trim());
}

function validarEmail(valor) {
  return /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i.test(valor.trim());
}



function aplicarEstado(inputId, iconeId, msgId, ok, msgOk, msgErro) {

  var input = document.getElementById(inputId);
  var icone = document.getElementById(iconeId);
  var msg   = document.getElementById(msgId);
  var vazio = input.value.trim() === '';

  if (vazio) {
    input.className  = '';
    icone.textContent = '';
    msg.className    = 'msg';
    msg.textContent  = msgOk;
  } else if (ok) {
    input.className   = 'ok';
    icone.textContent = '✓';
    icone.style.color = '#1D9E75';
    msg.className     = 'msg ok';
    msg.textContent   = 'Válido!';
  } else {
    input.className   = 'erro';
    icone.textContent = '✕';
    icone.style.color = '#E24B4A';
    msg.className     = 'msg erro';
    msg.textContent   = msgErro;
  }
}


document.getElementById('campo-numero').addEventListener('input', function() {
  var ok = validarNumero(this.value);
  aplicarEstado(
    'campo-numero',
    'icone-numero',
    'msg-numero',
    ok,
    'Insere apenas dígitos (0–9)',
    'Só são permitidos dígitos (0–9), sem letras ou símbolos'
  );
});

document.getElementById('campo-texto').addEventListener('input', function() {
  var ok = validarTexto(this.value);
  aplicarEstado(
    'campo-texto',
    'icone-texto',
    'msg-texto',
    ok,
    'Apenas letras e espaços, sem números',
    'Só são permitidas letras e espaços, sem números ou símbolos'
  );
});

document.getElementById('campo-email').addEventListener('input', function() {
  var ok = validarEmail(this.value);
  aplicarEstado(
    'campo-email',
    'icone-email',
    'msg-email',
    ok,
    'Formato: utilizador@dominio.com',
    'Formato inválido — usa utilizador@dominio.com'
  );
});


function validarTudo() {

  var n = document.getElementById('campo-numero').value.trim();
  var t = document.getElementById('campo-texto').value.trim();
  var e = document.getElementById('campo-email').value.trim();

  var erros = [];

  if (n === '') {
    erros.push('Telefone está vazio');
  } else if (!validarNumero(n)) {
    erros.push('Telefone tem caracteres inválidos');
  }

  if (t === '') {
    erros.push('Nome está vazio');
  } else if (!validarTexto(t)) {
    erros.push('Nome tem caracteres inválidos');
  }

  if (e === '') {
    erros.push('E-mail está vazio');
  } else if (!validarEmail(e)) {
    erros.push('E-mail tem formato inválido');
  }

  var resultado = document.getElementById('resultado');
  resultado.className = 'resultado visivel';

  if (erros.length === 0) {
    resultado.className += ' ok';
    resultado.textContent = '✓ Todos os campos estão válidos! Formulário pronto para enviar.';
  } else {
    resultado.className += ' erro';
    resultado.textContent = '✕ Erros: ' + erros.join(' | ');
  }
}


function limpar() {

  var campos = ['campo-numero', 'campo-texto', 'campo-email'];
  var icones = ['icone-numero', 'icone-texto', 'icone-email'];
  var msgs   = [
    { id: 'msg-numero', texto: 'Insere apenas dígitos (0–9)' },
    { id: 'msg-texto',  texto: 'Apenas letras e espaços, sem números' },
    { id: 'msg-email',  texto: 'Formato: utilizador@dominio.com' }
  ];

  campos.forEach(function(id) {
    var input = document.getElementById(id);
    input.value     = '';
    input.className = '';
  });

  icones.forEach(function(id) {
    document.getElementById(id).textContent = '';
  });

  msgs.forEach(function(item) {
    var msg = document.getElementById(item.id);
    msg.className   = 'msg';
    msg.textContent = item.texto;
  });

  var resultado = document.getElementById('resultado');
  resultado.className   = 'resultado';
  resultado.textContent = '';
}