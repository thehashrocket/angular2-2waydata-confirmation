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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyUp = function () {
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
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n        <h1>Your details, please.</h1>\n        <div>\n            <label for=\"name\">Your name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyUp()\">\n        </div>\n        <div>\n            <label for=\"age\">Your age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyUp()\">\n        </div>\n        <br/>\n        <div>Filled out: {{ isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{ isValid ? 'Yes' : 'No'}}</div>\n        <br/>\n        <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFBQTtvQkFDSSxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQztnQkFtQmhFLENBQUM7Z0JBakJHLGdDQUFPLEdBQVA7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNwQyxDQUFDO2dCQTVDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsb25CQWVUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEIsT0FBTyxFQUFDLENBQUMsV0FBVyxDQUFDO3FCQUN4QixDQUFDOztrQ0FBQTtnQkF5QkYscUJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELDJDQXVCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+WW91ciBkZXRhaWxzLCBwbGVhc2UuPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXlVcCgpXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPllvdXIgYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgWyhuZ01vZGVsKV09XCJteXNlbGYuYWdlXCIgKGtleXVwKT1cIm9uS2V5VXAoKVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdj5GaWxsZWQgb3V0OiB7eyBpc0ZpbGxlZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgICAgIDxkaXY+VmFsaWQ6IHt7IGlzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+U3VibWl0PC9idXR0b24+XG4gICAgYCxcbiAgICBpbnB1dHM6IFsnbXlzZWxmJ10sXG4gICAgb3V0cHV0czpbJ3N1Ym1pdHRlZCddXG59KVxuXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQge1xuICAgIG15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XG4gICAgaXNGaWxsZWQgPSBmYWxzZTtcbiAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bmFtZTogc3RyaW5nLCBhZ2U6IHN0cmluZ30+KCk7XG5cbiAgICBvbktleVVwKCkge1xuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgL15cXGQrJC8udGVzdCh0aGlzLm15c2VsZi5hZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLm15c2VsZilcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
