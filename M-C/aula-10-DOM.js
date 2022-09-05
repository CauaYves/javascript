var a = window.document.getElementById('area')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', saiu)

        function clicar() {
            a.innerText = 'clicou'
            a.style.background = 'red'
        }
        function entrar () {
            a.style.background = 'green'
            a.innerText = 'entrou'
        }
        function saiu () {
            a.innerText = 'saiu'
            a.style.background = 'yellow'
        }