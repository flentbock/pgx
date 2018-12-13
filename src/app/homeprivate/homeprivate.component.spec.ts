import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprivateComponent } from './homeprivate.component';

describe('HomeprivateComponent', () => {
    let component: HomeprivateComponent;
    let fixture: ComponentFixture<HomeprivateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeprivateComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeprivateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
