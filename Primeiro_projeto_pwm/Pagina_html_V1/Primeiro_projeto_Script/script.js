
        function validarFormulario(){
            var nome = document.getElementById("nome").value;
            var idade= document.getElementById ("idade").value;
            var email= document.getElementById ("email").value;
            var telefone= document.getElementById ("telefone").value;
            var morada= document.getElementById ("morada").value;

            if (nome ===""|| idade ==="" || email === ""|| telefone ==="" || morada === "") {
                alert("⚠️Por favor preenche todos os campos!");
                return;
            }
            
            alert("✅Inscrição enviada com sucesso!");

        }