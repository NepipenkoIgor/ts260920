let anyType: any = {};
anyType.a = 1;
anyType.a();
anyType = 3;
anyType();
anyType.a.b.c();

let objType: object = {a: 1};
objType.a = 1;
objType();
objType = [1, 2, 3];
objType.
    objType = 2;
objType = () => {
}
objType = {};
objType = new String();
objType = null;
Object.create(objType)

let objType1: Object = {};
objType1.a = 1;
objType1();
objType1 = [1, 2, 3];
objType1 = 2;


let unkType: unknown = {};
unkType.a = 1;
unkType.a();
unkType = 3;
unkType();
unkType.a.b.c();

let v: void = undefined;

function a(): never {
  throw new Error()
}

