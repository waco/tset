//TSet v 0.0.1 

TSet = function(){}
TSet.clone = function(obj){
  function F() {}
  F.prototype = Object(obj);
  return new F();
}
TSet.intersection = function(oa, ob, comp){
  if(comp == undefined) comp = TSet.comp;
  var i=0, j=0;
  var a = TSet.clone(oa);
  var b = TSet.clone(ob);
  a.sort(comp);
  b.sort(comp);

  var r = [];
  while(a[i] && b[j]){
    var c = comp(a[i], b[j]);
    switch(c){
    case 0:
      r.push(a[i]);
      i++;
      j++;
      break;
    case -1:
      i++;
      break;
    case 1:
      j++;
      break;
    }
  }
  return r;
}

TSet.difference = function(oa, ob, comp){
  if(comp == undefined) comp = TSet.comp;
  var i=0, j=0;
  var a = TSet.clone(oa);
  var b = TSet.clone(ob);
  a.sort(comp);
  b.sort(comp);

  var r = [];
  while(a[i] && b[j]){
    var c = comp(a[i], b[j]);
    switch(c){
    case 0:
      i++;
      j++;
      break;
    case -1:
      r.push(a[i]);
      i++;
      break;
    case 1:
      j++;
      break;
    }
  }
  return r.concat(a.slice(i));
}

TSet.union = function(oa, ob, comp){
  if(comp == undefined) comp = TSet.comp;
  var i=0, j=0;
  var a = TSet.clone(oa);
  var b = TSet.clone(ob);
  a.sort(comp);
  b.sort(comp);

  var r = [];
  while(a[i] && b[j]){
    var c = comp(a[i], b[j]);
    switch(c){
    case 0:
      r.push(a[i]);
      i++;
      j++;
      break;
    case -1:
      r.push(a[i]);
      i++;
      break;
    case 1:
      r.push(b[j]);
      j++;
      break;
    }
  }
  return r.concat(a.slice(i));
}

//評価関数
TSet.comp = function(a, b){
  if(a < b) return -1;
  else if(a == b) return 0;
  else if(a > b) return 1;
}

