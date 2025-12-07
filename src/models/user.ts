class User {

    userId!: string;
    name!: string;
    email!: string;
    nbrTasks!: number;
    password!: string;

    User(userId: string, name: string, email: string, nbrTasks: number, password: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.nbrTasks = nbrTasks;
        this.password = password;
    }

}