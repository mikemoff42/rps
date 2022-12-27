class rps {
  constructor(x,y,xspeed,yspeed,type) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.type = type;
    this.toDelete = false;
    this.collided = false;
  }  
  collide(other) {
    let d = dist(this.x,this.y,other.x,other.y);
    if (d < Size && !this.toDelete){
      
      // let tmpx = this.xspeed;
      // let tmpy = this.yspeed;
      // this.xspeed = other.xspeed;
      // this.yspeed = other.yspeed;
      // other.xspeed = tmpx;
      // other.yspeed = tmpy;

      let x1 = [this.x, this.y];
      let x2 = [other.x, other.y];
      let v1 = [this.xspeed, this.yspeed];
      let v2 = [other.xspeed, other.yspeed];


      let num1 = dotProduct(vectorSub(v1,v2), vectorSub(x1,x2));        // Numerator 1
      let num2 = vectorSub(x1,x2);                                      // Numerator 2
      let den1 = vectorMag(vectorSub(x1,x2))**2;                        // Denominator 1


      let num3 = dotProduct(vectorSub(v2,v1), vectorSub(x2,x1));        // Numerator 3
      let num4 = vectorSub(x2,x1);                                      // Numerator 4
      let den2 = vectorMag(vectorSub(x2,x1))**2;                        // Denominator 2

      let newv1 = vectorSub(v1, vectorMult(num2,(num1/den1)));
      let newv2 = vectorSub(v2, vectorMult(num4,(num3/den2)));

      // Update the velocities
      this.xspeed = newv1[0]*1.01;
      this.yspeed = newv1[1]*1.01;
      other.xspeed= newv2[0]*1.01;
      other.yspeed= newv2[1]*1.01;
      return true;
    }
  }  
}

function dotProduct(a,b){
  // Dot product of a*b (inner product/ scalar product)
  let product = 0;
  
  if (a.length !== b.length){
    return undefined;
  }
  else{
    for(let i = 0; i < a.length; i++){
      product += a[i]*b[i];
    }
    return product; // this is a scalar (just a number)
  }
}

function vectorMag(v){
  // Vector magnitude
  let mag = 0;
  for(let i of v){
    mag += i**2
  }
  return sqrt(mag); // this is also a scalar
}

function vectorSub(a,b){
  // Subtracts vector b from vector a
  let sub = []
  
  if (a.length !== b.length){
    return undefined;
  }
  else{
    for(let i = 0; i < a.length; i++){
      sub[i] = a[i]-b[i];
    }
    return sub; // this is a vector
  }
}

function vectorMult(v,s){
  // Multiplies vector (v) by scalar (s)
  let mult = [];
  for(let i = 0; i < v.length; i++){
    mult[i] = v[i]*s;
  }
  return mult; // This is also a vector
}


class Rock extends rps {
  constructor(x,y,xspeed,yspeed) {
    super(x,y,xspeed,yspeed)
  }  
  show() {
    // if (this.type == 'r') this.img = rock_img;
    // else if (this.type == 'p') this.img = paper_img;
    let speedx = random(-Speed, Speed);
    let speedy = random(-Speed, Speed);
    this.x+=this.xspeed;
    this.y+=this.yspeed;
    this.xspeed = constrain(this.xspeed,-5,5);
    this.yspeed = constrain(this.yspeed,-5,5);
    this.typeOf = 'Rock';
    
    if (this.x < Size/2) this.x = Size/2;
    if (this.x > width-Size/2) this.x = width - Size/2;
    if (this.y < Size/2) this.y = Size/2;
    if (this.y > height -Size/2) this.y = height-Size/2;
    
    if (this.x == Size/2 || this.x == width-Size/2) this.xspeed*=-1;
    if (this.y == Size/2 || this.y == height -Size/2) this.yspeed*=-1;
    
    // stroke(255);
    // fill(0,0,255);
    // circle(this.x,this.y,Size);
    image(rock_img, this.x, this.y, Size, Size);
  }
}

class Paper extends rps {
  constructor(x,y,xspeed,yspeed) {
    super(x,y,xspeed,yspeed)
  }  
  show() {
    // if (this.type == 'r') this.img = rock_img;
    // else if (this.type == 'p') this.img = paper_img;
    let speedx = random(-Speed, Speed);
    let speedy = random(-Speed, Speed);
    this.x+=this.xspeed;
    this.y+=this.yspeed;
    this.xspeed = constrain(this.xspeed,-5,5);
    this.yspeed = constrain(this.yspeed,-5,5);
    this.typeOf = 'Paper';
    
    if (this.x < Size/2) this.x = Size/2;
    if (this.x > width-Size/2) this.x = width - Size/2;
    if (this.y < Size/2) this.y = Size/2;
    if (this.y > height -Size/2) this.y = height-Size/2;
    
    if (this.x == Size/2 || this.x == width-Size/2) this.xspeed*=-1;
    if (this.y == Size/2 || this.y == height -Size/2) this.yspeed*=-1;
    
    // stroke(255);
    // fill(0,255,0);
    // circle(this.x,this.y,Size);
    image(paper_img, this.x, this.y, Size, Size);
  }
}

class Scissor extends rps {
  constructor(x,y,xspeed,yspeed) {
    super(x,y,xspeed,yspeed)
  }  
  show() {
    // if (this.type == 'r') this.img = rock_img;
    // else if (this.type == 'p') this.img = paper_img;
    let speedx = random(-Speed, Speed);
    let speedy = random(-Speed, Speed);
    this.x+=this.xspeed;
    this.y+=this.yspeed;
    this.xspeed = constrain(this.xspeed,-5,5);
    this.yspeed = constrain(this.yspeed,-5,5);
    this.typeOf = 'Scissor';
    
    if (this.x < Size/2) this.x = Size/2;
    if (this.x > width-Size/2) this.x = width - Size/2;
    if (this.y < Size/2) this.y = Size/2;
    if (this.y > height -Size/2) this.y = height-Size/2;
    
    if (this.x == Size/2 || this.x == width-Size/2) this.xspeed*=-1;
    if (this.y == Size/2 || this.y == height -Size/2) this.yspeed*=-1;
    
    // stroke(255);
    // fill(255,0,0);
    // circle(this.x,this.y,Size);
    image(scissor_img, this.x, this.y, Size, Size);
  }
}

