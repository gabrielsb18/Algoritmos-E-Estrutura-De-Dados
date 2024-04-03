//== compara o tipo
//=== compara o tipo e conteudo

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        //ADICIONA O ITEM Á PILHA
        his.items.push(element);
    }

    pop() {
        //REMOVE O ITEM DO TOPO DA LISTA
        return this.pop();
    }

    peek() {
        //DEVOLVE O ELEMENTO QUE ESTÁ NO TOPO DA PILHA
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        //INFORMAR SE A PILHA ESTÁ VAZIA OU NÃO
        return this.items.lenght === 0;
    }

    clear() {
        //LIMPA A PILHA
        this.items = [];
    }

    size() {
        //INFORMA O TAMANHO DA PILHA
        return this.items.length;
    }

    print() {
        //IMPRIME A PILHA NO CONSOLE
        console.log(items.toString());
    }
}

//CRIANDO UMA INSTANCIA DA CLASSE ISTRING
const stack = new stack();
//VERIFICANDO SE A PILHA STACK ESTÁ VAZIA
console.log(stack.isEmpty());

//ADICIONANDO ELEMENTOS NO TOPO DA PILHA
stack.push(5)
stack.push(8)
//EXIBINDO O ELEMENTO DO TOPO DA PILHA
console.log(stack.peek());


//      USANDO A CLASSE STACK
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.print();