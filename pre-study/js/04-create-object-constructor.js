/**
 * ---------------------------------------------------
 * 사용자 정의 객체 (다른 언어에서는 클래스(Class))
 * 생성자 함수 (일급 함수)
 * ex) new 생성자 함수 -> 객체 인스턴스 생성
 * ---------------------------------------------------
 */

// 생성자 함수 (Constructor Function)
// BioCreature 정의
function BioCreature() {
	// JS 함수 내부의 this는 함수의 실행 영역(Excutable Context)을 가리킴.(참조)
	console.log(this);
}

// this === window 참조
var resultFn = BioCreature(); // 실행 ━ 일반 함수와 같음.

// console.log(resultFn);

// this === 생성된 객체 인스턴스 참조
var sleepingDog  = new BioCreature(); // 객체 인스턴스 생성. (생성자 함수의 역할)
var sleepingBaby = new BioCreature();
var sleepingCat  = new BioCreature();

console.log(sleepingDog);
console.log(sleepingBaby);
console.log(sleepingCat);