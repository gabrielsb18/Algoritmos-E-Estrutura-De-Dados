//FIFO = PRIMEIRO A ENTRAR, PRIMEIRO A SAIR
//LIFO = ULTIMO A ENTRAR PRIMEIRO A SAIR
//LISTA ENCADEADA = ELA É DINAMICA!PODE SER ALTERADA, INSERINDO, REMOVENDO E SEU TAMANHO DE ELEMENTOS SENDO VARIAVEL

//IMPLEMENTAÇÃO
function Linkedlist(){
    let Node = function (element){
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    //INSERE UM NOVO ELEMENTO NA LISTA
    this.append = function (element){
        const node = new Node(element);
        let current = null;
        if (head === null){
            head = node;
        } else {
            current = head;
            while (current.next){
                //obtem o ultimo item
                current = current.next;
            }
            // e atribui o novo elemento
            // a next para criar a ligação
            current.next = node;
        }
        length++
    };

    this.insert = function (position, element){
        //ESSE METODOD INSERE UM NOVO ELEMENTO EME UMA POSIÇÃO ESPECÍFICA
    };

    this.getElement = function (position){
        //ESSE METODO DEVOLVE O ELEMENTO QUE ESTÁ EM UMA POSIÇAI
    };

    this.remover = function (element){
    };
    
    this.removeAt = function(position){
    };

    this.indexOf = function (element){
    };

    this.isEmpty = function(){
    };

    this.size = function(){
    };

    this.getHead = function(){
    };

    this.toString = function(){
    };
}