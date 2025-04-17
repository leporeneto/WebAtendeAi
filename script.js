// Elementos
const sexoSelect = document.getElementById("sexo");
const acompanhadoSelect = document.getElementById("acompanhado");
const acompanhanteCampo = document.getElementById("acompanhanteCampo");
const dumContainer = document.getElementById("dumContainer");

const medicacaoCheck = document.getElementById("medicacaoCheck");
const medicacaoTexto = document.getElementById("medicacaoTexto");

const examesCheck = document.getElementById("examesCheck");
const examesTexto = document.getElementById("examesTexto");

const encaminhamentoCheck = document.getElementById("encaminhamentoCheck");
const encaminhamentoTexto = document.getElementById("encaminhamentoTexto");

const gerarTextoBtn = document.getElementById("gerarTexto");
const resultado = document.getElementById("resultado");

// Acompanhado
acompanhadoSelect.addEventListener("change", () => {
  if (acompanhadoSelect.value === "sim") {
    acompanhanteCampo.classList.remove("hidden");
  } else {
    acompanhanteCampo.classList.add("hidden");
  }
});

// Sexo → mostra DUM se for mulher
sexoSelect.addEventListener("change", () => {
  if (sexoSelect.value === "mulher") {
    dumContainer.classList.remove("hidden");
  } else {
    dumContainer.classList.add("hidden");
  }
});

// Mostrar/ocultar textbox de Medicação
medicacaoCheck.addEventListener("change", () => {
  medicacaoTexto.classList.toggle("hidden", !medicacaoCheck.checked);
});

// Mostrar/ocultar textbox de Exames
examesCheck.addEventListener("change", () => {
  examesTexto.classList.toggle("hidden", !examesCheck.checked);
});

// Mostrar/ocultar textbox de Encaminhamento
encaminhamentoCheck.addEventListener("change", () => {
  encaminhamentoTexto.classList.toggle("hidden", !encaminhamentoCheck.checked);
});

// Botão Gerar Texto (a lógica de composição do texto final virá depois)
gerarTextoBtn.addEventListener("click", () => {
  const nome = document.querySelector('input[name="nome"]').value;
  const queixas = document.querySelector('textarea[name="queixas"]').value;

  let textoFinal = `Paciente: ${nome}\nQueixas: ${queixas}`;

  resultado.style.display = "block";
  resultado.textContent = textoFinal;
});
