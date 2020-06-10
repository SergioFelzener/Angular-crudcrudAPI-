class Categoria {
    id: string = this.generateId()
    name: string

    constructor(name: string){
        this.name = name
    }

    private generateId(): string {
        return Math.random().toString(32).substring(2)
    }
}

export default Categoria