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
                    console.log('myself', myself);
                    this.myself = { name: myself.name, age: myself.age };
                    console.log('this.myself', this.myself);
                };
                AppComponent.prototype.onConfirm = function (myself) {
                    this.confirmedMyself = { name: myself.name, age: myself.age };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n            <my-input (submitted)=\"onSubmit($event)\" [myself]=\"myself\"></my-input>\n        </div>\n        <div class=\"container\">\n            <my-confirm (confirm)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n        </div>\n       \n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7b0JBQzdCLG9CQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFXMUMsQ0FBQztnQkFURywrQkFBUSxHQUFSLFVBQVMsTUFBbUM7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO29CQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQztvQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUMzQyxDQUFDO2dCQUVELGdDQUFTLEdBQVQsVUFBVSxNQUFtQztvQkFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBekJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwwU0FRVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLG9DQUFnQixDQUFDO3FCQUNqRCxDQUFDOztnQ0FBQTtnQkFjRixtQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsdUNBYUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5ncy9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb25maXJtQ29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxteS1pbnB1dCAoc3VibWl0dGVkKT1cIm9uU3VibWl0KCRldmVudClcIiBbbXlzZWxmXT1cIm15c2VsZlwiPjwvbXktaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bXktY29uZmlybSAoY29uZmlybSk9XCJvbkNvbmZpcm0oJGV2ZW50KVwiIFtteXNlbGZdPVwibXlzZWxmXCI+PC9teS1jb25maXJtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtJbnB1dENvbXBvbmVudCwgQ29uZmlybUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBteXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xuICAgIGNvbmZpcm1lZE15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XG5cbiAgICBvblN1Ym1pdChteXNlbGY6IHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfSkge1xuICAgICAgICBjb25zb2xlLmxvZygnbXlzZWxmJywgbXlzZWxmKVxuICAgICAgICB0aGlzLm15c2VsZiA9IHtuYW1lOiBteXNlbGYubmFtZSwgYWdlOiBteXNlbGYuYWdlfTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubXlzZWxmJywgdGhpcy5teXNlbGYpXG4gICAgfVxuXG4gICAgb25Db25maXJtKG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KSB7XG4gICAgICAgIHRoaXMuY29uZmlybWVkTXlzZWxmID0ge25hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2V9O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
