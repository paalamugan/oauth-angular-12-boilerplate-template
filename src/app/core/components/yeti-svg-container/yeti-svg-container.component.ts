import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Position } from './model';
import { gsap, Expo, Quad } from 'gsap';
// import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
// gsap.registerPlugin(MorphSVGPlugin);

@Component({
  selector: 'app-yeti-svg-container',
  templateUrl: './yeti-svg-container.component.html',
  styleUrls: ['./yeti-svg-container.component.scss'],
})
export class YetiSvgContainerComponent implements OnInit, OnDestroy {
  @Input('email') email!: HTMLInputElement;
  @Input('password') password!: HTMLInputElement;

  mySVG!: any;
  armL!: any;
  armR!: any;
  eyeL!: any;
  eyeR!: any;
  nose!: any;
  mouth!: any;
  mouthBG!: any;
  mouthSmallBG!: any;
  mouthMediumBG!: any;
  mouthLargeBG!: any;
  mouthMaskPath!: any;
  mouthOutline!: any;
  tooth!: any;
  tongue!: any;
  chin!: any;
  face!: any;
  eyebrow!: any;
  outerEarL!: any;
  outerEarR!: any;
  earHairL!: any;
  earHairR!: any;
  hair!: any;

  caretPos: any;
  curEmailIndex: any;
  screenCenter: any;
  svgCoords: any;
  eyeMaxHorizD: number = 20;
  eyeMaxVertD: number = 10;
  noseMaxHorizD: number = 23;
  noseMaxVertD: number = 10;
  dFromC: any;
  eyeDistH: any;
  eyeLDistV: any;
  eyeRDistV: any;
  eyeDistR: any;
  mouthStatus: string = 'small';

  constructor() {}

  ngOnInit(): void {
    if (!this.email || !this.password) {
      return;
    }
    this.loadQuerySelector();

    this.addEventListener();

    gsap.set(this.armL, {
      x: -93,
      y: 220,
      rotation: 105,
      transformOrigin: 'top left',
    });
    gsap.set(this.armR, {
      x: -93,
      y: 220,
      rotation: -105,
      transformOrigin: 'top right',
    });
  }

  loadQuerySelector() {
    this.mySVG = document.querySelector('.svgContainer');
    this.armL = document.querySelector('.armL');
    this.armR = document.querySelector('.armR');
    this.eyeL = document.querySelector('.eyeL');
    this.eyeR = document.querySelector('.eyeR');
    this.nose = document.querySelector('.nose');
    this.mouth = document.querySelector('.mouth');
    this.mouthBG = document.querySelector('.mouthBG');
    this.mouthSmallBG = document.querySelector('.mouthSmallBG');
    this.mouthMediumBG = document.querySelector('.mouthMediumBG');
    this.mouthLargeBG = document.querySelector('.mouthLargeBG');
    this.mouthMaskPath = document.querySelector('#mouthMaskPath');
    this.mouthOutline = document.querySelector('.mouthOutline');
    this.tooth = document.querySelector('.tooth');
    this.tongue = document.querySelector('.tongue');
    this.chin = document.querySelector('.chin');
    this.face = document.querySelector('.face');
    this.eyebrow = document.querySelector('.eyebrow');
    this.outerEarL = document.querySelector('.earL .outerEar');
    this.outerEarR = document.querySelector('.earR .outerEar');
    this.earHairL = document.querySelector('.earL .earHair');
    this.earHairR = document.querySelector('.earR .earHair');
    this.hair = document.querySelector('.hair');
  }

  addEventListener() {
    this.email.addEventListener('focus', (e) => this.onEmailFocus(e));
    this.email.addEventListener('blur', (e) => this.onEmailBlur(e));
    this.email.addEventListener('input', (e) => this.onEmailInput(e));
    this.password.addEventListener('focus', (e) => this.onPasswordFocus(e));
    this.password.addEventListener('blur', (e) => this.onPasswordBlur(e));
  }

  removeEventListener() {
    this.email.removeEventListener('focus', this.onEmailFocus);
    this.email.removeEventListener('blur', this.onEmailBlur);
    this.email.removeEventListener('input', this.onEmailInput);
    this.password.removeEventListener('focus', this.onPasswordFocus);
    this.password.removeEventListener('blur', this.onPasswordBlur);
  }

  getCoord() {
    let carPos = this.email.selectionEnd || 0;
    let div = document.createElement('div');
    let span = document.createElement('span');
    let copyStyle = getComputedStyle(this.email);

    let emailCoords: Position = {
      x: 0,
      y: 0,
    };
    let caretCoords: Position = {
      x: 0,
      y: 0,
    };
    let centerCoords: Position = {
      x: 0,
      y: 0,
    };

    [].forEach.call(copyStyle, (prop) => {
      div.style[prop] = copyStyle[prop];
    });

    div.style.position = 'absolute';
    document.body.appendChild(div);
    div.textContent = this.email.value.substr(0, carPos);
    span.textContent = this.email.value.substr(carPos) || '.';
    div.appendChild(span);

    emailCoords = this.getPosition(this.email); //console.log("emailCoords.x: " + emailCoords.x + ", emailCoords.y: " + emailCoords.y);
    caretCoords = this.getPosition(span); //console.log("caretCoords.x " + caretCoords.x + ", caretCoords.y: " + caretCoords.y);
    centerCoords = this.getPosition(this.mySVG); //console.log("centerCoords.x: " + centerCoords.x);
    this.svgCoords = this.getPosition(this.mySVG);
    this.screenCenter = centerCoords.x + this.mySVG.offsetWidth / 2; //console.log("screenCenter: " + screenCenter);
    this.caretPos = caretCoords.x + emailCoords.x; //console.log("caretPos: " + caretPos);

    this.dFromC = this.screenCenter - this.caretPos; //console.log("dFromC: " + dFromC);
    var pFromC = Math.round((this.caretPos / this.screenCenter) * 100) / 100;
    if (pFromC < 1) {
    } else if (pFromC > 1) {
      pFromC -= 2;
      pFromC = Math.abs(pFromC);
    }

    this.eyeDistH = -this.dFromC * 0.05;
    if (this.eyeDistH > this.eyeMaxHorizD) {
      this.eyeDistH = this.eyeMaxHorizD;
    } else if (this.eyeDistH < -this.eyeMaxHorizD) {
      this.eyeDistH = -this.eyeMaxHorizD;
    }

    var eyeLCoords = { x: this.svgCoords.x + 84, y: this.svgCoords.y + 76 };
    var eyeRCoords = { x: this.svgCoords.x + 113, y: this.svgCoords.y + 76 };
    var noseCoords = { x: this.svgCoords.x + 97, y: this.svgCoords.y + 81 };
    var mouthCoords = { x: this.svgCoords.x + 100, y: this.svgCoords.y + 100 };
    var eyeLAngle = this.getAngle(
      eyeLCoords.x,
      eyeLCoords.y,
      emailCoords.x + caretCoords.x,
      emailCoords.y + 25
    );
    var eyeLX = Math.cos(eyeLAngle) * this.eyeMaxHorizD;
    var eyeLY = Math.sin(eyeLAngle) * this.eyeMaxVertD;
    var eyeRAngle = this.getAngle(
      eyeRCoords.x,
      eyeRCoords.y,
      emailCoords.x + caretCoords.x,
      emailCoords.y + 25
    );
    var eyeRX = Math.cos(eyeRAngle) * this.eyeMaxHorizD;
    var eyeRY = Math.sin(eyeRAngle) * this.eyeMaxVertD;
    var noseAngle = this.getAngle(
      noseCoords.x,
      noseCoords.y,
      emailCoords.x + caretCoords.x,
      emailCoords.y + 25
    );
    var noseX = Math.cos(noseAngle) * this.noseMaxHorizD;
    var noseY = Math.sin(noseAngle) * this.noseMaxVertD;
    var mouthAngle = this.getAngle(
      mouthCoords.x,
      mouthCoords.y,
      emailCoords.x + caretCoords.x,
      emailCoords.y + 25
    );
    var mouthX = Math.cos(mouthAngle) * this.noseMaxHorizD;
    var mouthY = Math.sin(mouthAngle) * this.noseMaxVertD;
    var mouthR = Math.cos(mouthAngle) * 6;
    var chinX = mouthX * 0.8;
    var chinY = mouthY * 0.5;
    var chinS = 1 - (this.dFromC * 0.15) / 100;
    if (chinS > 1) {
      chinS = 1 - (chinS - 1);
    }
    var faceX = mouthX * 0.3;
    var faceY = mouthY * 0.4;
    var faceSkew = Math.cos(mouthAngle) * 5;
    var eyebrowSkew = Math.cos(mouthAngle) * 25;
    var outerEarX = Math.cos(mouthAngle) * 4;
    var outerEarY = Math.cos(mouthAngle) * 5;
    var hairX = Math.cos(mouthAngle) * 6;
    var hairS = 1.2;

    gsap.to(this.eyeL, { x: -eyeLX, y: -eyeLY, ease: Expo.easeOut });
    gsap.to(this.eyeR, { x: -eyeRX, y: -eyeRY, ease: Expo.easeOut });
    gsap.to(this.nose, {
      x: -noseX,
      y: -noseY,
      rotation: mouthR,
      transformOrigin: 'center center',
      ease: Expo.easeOut,
    });
    gsap.to(this.mouth, {
      x: -mouthX,
      y: -mouthY,
      rotation: mouthR,
      transformOrigin: 'center center',
      ease: Expo.easeOut,
    });
    gsap.to(this.chin, {
      x: -chinX,
      y: -chinY,
      scaleY: chinS,
      ease: Expo.easeOut,
    });
    gsap.to(this.face, {
      x: -faceX,
      y: -faceY,
      skewX: -faceSkew,
      transformOrigin: 'center top',
      ease: Expo.easeOut,
    });
    gsap.to(this.eyebrow, {
      x: -faceX,
      y: -faceY,
      skewX: -eyebrowSkew,
      transformOrigin: 'center top',
      ease: Expo.easeOut,
    });
    gsap.to(this.outerEarL, {
      x: outerEarX,
      y: -outerEarY,
      ease: Expo.easeOut,
    });
    gsap.to(this.outerEarR, {
      x: outerEarX,
      y: outerEarY,
      ease: Expo.easeOut,
    });
    gsap.to(this.earHairL, {
      x: -outerEarX,
      y: -outerEarY,
      ease: Expo.easeOut,
    });
    gsap.to(this.earHairR, {
      x: -outerEarX,
      y: outerEarY,
      ease: Expo.easeOut,
    });
    gsap.to(this.hair, {
      x: hairX,
      scaleY: hairS,
      transformOrigin: 'center bottom',
      ease: Expo.easeOut,
    });

    document.body.removeChild(div);
  }

  onEmailInput(e: any) {
    this.getCoord();
    let value = e.target.value;
    this.curEmailIndex = value.length;

    // very crude email validation for now to trigger effects
    if (this.curEmailIndex > 0) {
      if (this.mouthStatus == 'small') {
        this.mouthStatus = 'medium';
        gsap.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], {
          morphSVG: this.mouthMediumBG,
          shapeIndex: 8,
          ease: Expo.easeOut,
        });
        gsap.to(this.tooth, { x: 0, y: 0, ease: Expo.easeOut });
        gsap.to(this.tongue, { x: 0, y: 1, ease: Expo.easeOut });
        gsap.to([this.eyeL, this.eyeR], {
          scaleX: 0.85,
          scaleY: 0.85,
          ease: Expo.easeOut,
        });
      }
      if (value.includes('@')) {
        this.mouthStatus = 'large';
        gsap.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], {
          morphSVG: this.mouthLargeBG,
          ease: Expo.easeOut,
          duration: 1,
        });
        gsap.to(this.tooth, { x: 3, y: -2, ease: Expo.easeOut });
        gsap.to(this.tongue, { y: 2, ease: Expo.easeOut });
        gsap.to([this.eyeL, this.eyeR], {
          scaleX: 0.65,
          scaleY: 0.65,
          ease: Expo.easeOut,
          transformOrigin: 'center center',
        });
      } else {
        this.mouthStatus = 'medium';
        gsap.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], {
          morphSVG: this.mouthMediumBG,
          ease: Expo.easeOut,
        });
        gsap.to(this.tooth, { x: 0, y: 0, ease: Expo.easeOut });
        gsap.to(this.tongue, { x: 0, y: 1, ease: Expo.easeOut });
        gsap.to([this.eyeL, this.eyeR], {
          scaleX: 0.85,
          scaleY: 0.85,
          ease: Expo.easeOut,
        });
      }
    } else {
      this.mouthStatus = 'small';
      gsap.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], {
        morphSVG: this.mouthSmallBG,
        shapeIndex: 9,
        ease: Expo.easeOut,
      });
      gsap.to(this.tooth, { x: 0, y: 0, ease: Expo.easeOut });
      gsap.to(this.tongue, { y: 0, ease: Expo.easeOut });
      gsap.to([this.eyeL, this.eyeR], {
        scaleX: 1,
        scaleY: 1,
        ease: Expo.easeOut,
      });
    }
  }

  onEmailFocus(e: Event) {
    this.getCoord();
  }

  onEmailBlur(e: Event) {
    this.resetFace();
  }

  onPasswordFocus(e: Event) {
    this.coverEyes();
  }

  onPasswordBlur(e: Event) {
    this.uncoverEyes();
  }

  coverEyes() {
    gsap.to(this.armL, {
      x: -93,
      y: 2,
      rotation: 0,
      ease: Quad.easeOut,
      duration: 0.45,
    });
    gsap.to(this.armR, {
      x: -93,
      y: 2,
      rotation: 0,
      ease: Quad.easeOut,
      delay: 0.1,
      duration: 0.45,
    });
  }

  uncoverEyes() {
    gsap.to(this.armL, { y: 220, ease: Quad.easeOut, duration: 1.35 });
    gsap.to(this.armL, {
      rotation: 105,
      ease: Quad.easeOut,
      delay: 0.1,
      duration: 1.35,
    });
    gsap.to(this.armR, { y: 220, ease: Quad.easeOut, duration: 1.35 });
    gsap.to(this.armR, {
      rotation: -105,
      ease: Quad.easeOut,
      delay: 0.1,
      duration: 1.35,
    });
  }

  resetFace() {
    gsap.to([this.eyeL, this.eyeR], { x: 0, y: 0, ease: Expo.easeOut });
    gsap.to(this.nose, {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      ease: Expo.easeOut,
    });
    gsap.to(this.mouth, { x: 0, y: 0, rotation: 0, ease: Expo.easeOut });
    gsap.to(this.chin, { x: 0, y: 0, scaleY: 1, ease: Expo.easeOut });
    gsap.to([this.face, this.eyebrow], {
      x: 0,
      y: 0,
      skewX: 0,
      ease: Expo.easeOut,
    });
    gsap.to(
      [this.outerEarL, this.outerEarR, this.earHairL, this.earHairR, this.hair],
      { x: 0, y: 0, scaleY: 1, ease: Expo.easeOut }
    );
  }

  getAngle(x1: number, y1: number, x2: number, y2: number) {
    var angle = Math.atan2(y1 - y2, x1 - x2);
    return angle;
  }

  getPosition(el: HTMLElement): Position {
    var xPos = 0;
    var yPos = 0;

    while (el) {
      if (el.tagName == 'BODY') {
        // deal with browser quicks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += el.offsetLeft - xScroll + el.clientLeft;
        yPos += el.offsetTop - yScroll + el.clientTop;
      } else {
        // for all other non-BODY elements
        xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
        yPos += el.offsetTop - el.scrollTop + el.clientTop;
      }

      el = el.offsetParent as HTMLElement;
    }
    return {
      x: xPos,
      y: yPos,
    };
  }

  ngOnDestroy() {
    this.removeEventListener();
  }
}
