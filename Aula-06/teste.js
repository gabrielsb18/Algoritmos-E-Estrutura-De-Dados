class Queuer {
    constructor(){
        //PROPIEDADE COUNT PARA CONTROLAR O TAMANHO DA FILA
        this.count = 0;
        //COMO REMOVEREMOS DA FRENTE DA FILA, A PROPIEDADE LOWESTCOUNT PARA MANTER O CONTROLE DO PRIMEIRO ELEMENTO
        this.lowestCount = 0;
        //USAREMOS UM OBJETO PARA ARMAZENAR ELEMENTOS NA FILA
        this.items = {};

        enqueue(element){
            this.items[items.count] = element;
            this.count++;
        }

        size(){
            return this.count - this.lowestCount;
        }

        isEmpty(){
            return this.size() === 0;
        }

        dequeue(){
            if(this.isEmpty()){
                return undefined;
            }

            const result = this.items[this.lowestCount];
            delete this.items[this.lowestCount];
            this.lowestCount++;
            return result;
        }

        peek(){
            if(this.isEmpty()){
                return undefined;
            }

            return this.items[this.lowestCount];
        }

        clear(){ 
            
        }

        toString(){
            
        }
    }
}

enqueue(element){
    this.items[this.count] = element;
    this.count++;
}