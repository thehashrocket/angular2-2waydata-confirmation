System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyUp = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmed.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n        <h1>You submitted the following details. Is this correct?</h1>\n        <p>Your name is <span class=\"highlight\">{{myself.name}}</span> and your age is \n        <span class=\"highlight\">{{myself.age}}</span></p>\n        <p>Please click on confirm if you have made any changes to this information.</p>\n        <div>\n            <label for=\"name\">Your name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyUp()\">\n        </div>\n        <div>\n            <label for=\"age\">Your age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyUp()\">\n        </div>\n        <br/>\n        <div>Filled out: {{ isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{ isValid ? 'Yes' : 'No'}}</div>\n        <br/>\n        <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Submit</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['confirmed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO29CQUNJLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUM3QixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUVoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUErQixDQUFDO2dCQWtCaEUsQ0FBQztnQkFoQkcsa0NBQU8sR0FBUDtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBQ0Qsb0NBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBL0NMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSx1NEJBa0JUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN6QixDQUFDOztvQ0FBQTtnQkF5QkYsdUJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELCtDQXVCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY29uZmlybScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPllvdSBzdWJtaXR0ZWQgdGhlIGZvbGxvd2luZyBkZXRhaWxzLiBJcyB0aGlzIGNvcnJlY3Q/PC9oMT5cbiAgICAgICAgPHA+WW91ciBuYW1lIGlzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+e3tteXNlbGYubmFtZX19PC9zcGFuPiBhbmQgeW91ciBhZ2UgaXMgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+e3tteXNlbGYuYWdlfX08L3NwYW4+PC9wPlxuICAgICAgICA8cD5QbGVhc2UgY2xpY2sgb24gY29uZmlybSBpZiB5b3UgaGF2ZSBtYWRlIGFueSBjaGFuZ2VzIHRvIHRoaXMgaW5mb3JtYXRpb24uPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJteXNlbGYubmFtZVwiIChrZXl1cCk9XCJvbktleVVwKClcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWdlXCI+WW91ciBhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXlVcCgpXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2PkZpbGxlZCBvdXQ6IHt7IGlzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICAgICAgPGRpdj5WYWxpZDoge3sgaXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uQ29uZmlybSgpXCI+U3VibWl0PC9idXR0b24+XG4gICAgYCxcbiAgICBpbnB1dHM6IFsnbXlzZWxmJ10sXG4gICAgb3V0cHV0czogWydjb25maXJtZWQnXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1Db21wb25lbnQge1xuICAgIG15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XG4gICAgaXNGaWxsZWQgPSBmYWxzZTtcbiAgICBpc1ZhbGlkID0gZmFsc2U7XG5cbiAgICBjb25maXJtZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcblxuICAgIG9uS2V5VXAoKSB7XG4gICAgICAgIGlmICh0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIHRoaXMubXlzZWxmLmFnZSAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMuY29uZmlybWVkLmVtaXQodGhpcy5teXNlbGYpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
