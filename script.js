gerarTextoBtn.addEventListener("click", () => {
  const sexo = document.querySelector('select[name="sexo"]').value;
  const acompanhado = document.querySelector('select[name="acompanhado"]').value;
  const acompanhanteInfo = document.querySelector('input[name="acompanhanteInfo"]').value.trim();
  const queixas = document.querySelector('textarea[name="queixas"]').value.trim();
  const alergias = document.querySelector('input[name="alergias"]').value.trim();
  const medicamentos = document.querySelector('input[name="medicamentos"]').value.trim();
  const comorbidades = document.querySelector('input[name="comorbidades"]').value.trim();
  const exameFisico = document.querySelector('select[name="exameFisico"]').value;
  const diagnostico = document.querySelector('input[name="diagnostico"]').value.trim();
  const medicacao = medicacaoCheck.checked ? medicacaoTexto.value.trim() : "";
  const exames = examesCheck.checked ? examesTexto.value.trim() : "";
  const receita = receitaCheck.checked;
  const cuidados = cuidadosCheck.checked;
  const atestado = atestadoCheck.checked;
  const encaminhamento = encaminhamentoCheck.checked ? encaminhamentoTexto.value.trim() : "";
  const alta = altaCheck.checked;

  // Q/HPMA
  let texto = "";
  if (acompanhado === "sim" && acompanhanteInfo) {
    texto += `# Q/HPMA: Paciente acompanhado por: ${acompanhanteInfo}. Refere ${queixas}. Nega outras queixas ou sintomas associados.\n\n`;
  } else {
    texto += `# Q/HPMA: Paciente refere ${queixas}. Nega outras queixas ou sintomas associados.\n\n`;
  }

  // ANTECEDENTES
  texto += `# ANTECEDENTES PESSOAIS:\n`;
  texto += `- COMORBIDADES: ${comorbidades}\n`;
  texto += `- MUC: ${medicamentos}\n`;
  texto += `- ALERGIAS: ${alergias}\n\n`;

  // EXAME FÍSICO (fixo por enquanto)
  texto += `# EXAME FÍSICO:\n`;
  texto += `- GERAL: BEG, corado, hidratado, acianótico, anictérico, afebril;\n`;
  texto += `- NEURO: glasgow 15, LOTE, PIFR, sem déficts, sem sinais meningeos;\n`;
  texto += `-  AP: MV+ bilat. sem RA, eupneico, sem esforço respiratorio;\n`;
  texto += `- ACV: RCR, BNF 2T sem sopros, pulsos amplos e simétricos TEC < 2s;\n`;
  texto += `- ABD: flacido, RHA+ normoativos, sem viceromegalias, indolor palpação difusa, DB neg, murphy neg, giordano neg;\n`;
  texto += `- MMII:  edemas ausentes, panturrilhas livres;\n\n`;

  // HD
  texto += `# HD: ${diagnostico}\n\n`;

  // CONDUTA
  texto += `# CONDUTA:\n`;
  if (medicacao) texto += `- Prescrevo medicação para uso hospitalar: ${medicacao}\n`;
  if (receita) texto += `- Prescrevo medicação para uso domiciliar conforme receita entregue para o paciente e registrada em sistema;\n`;
  if (exames) {
    texto += `- Solicito: ${exames}\n`;
    texto += `- Reavaliar após\n`;
  }
  if (cuidados) {
    texto += `- Oriento cuidados em domicilio;\n`;
    texto += `- Oriento sinais de alarme para procurar servico de saude precocemente se necessario;\n`;
    texto += `- Paciente ciente e concordante;\n`;
  }
  if (atestado) texto += `- Forneço atestado médico com CID solicitado e autorizado pelo paciente conforme registrado em prontuário\n`;
  if (encaminhamento) texto += `- Encaminho para avaliação e seguimento ambulatorial com ${encaminhamento}\n`;
  if (alta && medicacao) {
    texto += `- Alta hospitalar após medicação\n`;
  } else if (alta) {
    texto += `- Alta hospitalar\n`;
  }

  // Exibir resultado
  resultado.style.display = "block";
  resultado.textContent = texto;
});
