export enum FighterType {
    JUVE = "Juve",
    GANGER = "Ganger",
    CHAMPION = "Champion",
    CHIEF = "Chief"
};

export class Fighter {
    type: FighterType;
    name: string;
    M: number;
    CC: number;
    CT: number;
    F: number;
    E: number;
    PV: number;
    I: number;
    A: number;
    CD: number;
    SF: number;
    V: number;
    INT: number;
    creditValue: number;
    equipementList: Array<String>;
    skillList: Array<String>;

    constructor(type: FighterType,
        name: string,
        M: number,
        CC: number,
        CT: number,
        F: number,
        E: number,
        PV: number,
        I: number,
        A: number,
        CD: number,
        SF: number,
        V: number,
        INT: number,
        creditValue: number,
        equipementList: Array<String>,
        skillList: Array<String>) { 
            this.type = type;
            this.name =name;
            this.M = M;
            this.CC= CC;
            this.CT= CT;
            this.F= F;
            this.E=  E;
            this.PV= PV;
            this.I= I;
            this.A= A ;
            this.CD= CD;
            this.SF= SF;
            this.V= V;
            this.INT= INT;
            this.creditValue=creditValue;
            this.equipementList=equipementList;
            this.skillList=skillList;
    }  
};

