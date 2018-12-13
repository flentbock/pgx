import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepublicComponent } from './homepublic.component';

describe('HomeprivateComponent', () => {
    let component: HomepublicComponent;
    let fixture: ComponentFixture<HomepublicComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomepublicComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomepublicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
