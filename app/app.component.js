System.register(['@angular/core', './bindings/input.component', './bindings/confirm.component'], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                AppComponent.prototype.onSubmit = function (myself) {
                    this.myself = { name: myself.name, age: myself.age };
                };
                AppComponent.prototype.onConfirm = function (myself) {
                    this.confirmedMyself = { name: myself.name, age: myself.age };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n            <my-input (submitted)=\"onSubmit($event)\" [myself]=\"confirmedMyself\"></my-input>\n        </div>\n        <div class=\"container\">\n            <my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n        </div>\n       \n    ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7b0JBQzdCLG9CQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFTMUMsQ0FBQztnQkFQRywrQkFBUSxHQUFSLFVBQVMsTUFBbUM7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELGdDQUFTLEdBQVQsVUFBVSxNQUFtQztvQkFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBdkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxVEFRVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLG9DQUFnQixDQUFDO3FCQUNqRCxDQUFDOztnQ0FBQTtnQkFZRixtQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsdUNBV0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5ncy9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb25maXJtQ29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxteS1pbnB1dCAoc3VibWl0dGVkKT1cIm9uU3VibWl0KCRldmVudClcIiBbbXlzZWxmXT1cImNvbmZpcm1lZE15c2VsZlwiPjwvbXktaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bXktY29uZmlybSAoY29uZmlybWVkKT1cIm9uQ29uZmlybSgkZXZlbnQpXCIgW215c2VsZl09XCJteXNlbGZcIj48L215LWNvbmZpcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0lucHV0Q29tcG9uZW50LCBDb25maXJtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XG4gICAgY29uZmlybWVkTXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcblxuICAgIG9uU3VibWl0KG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KSB7XG4gICAgICAgIHRoaXMubXlzZWxmID0ge25hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2V9O1xuICAgIH1cblxuICAgIG9uQ29uZmlybShteXNlbGY6IHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfSkge1xuICAgICAgICB0aGlzLmNvbmZpcm1lZE15c2VsZiA9IHtuYW1lOiBteXNlbGYubmFtZSwgYWdlOiBteXNlbGYuYWdlfTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
