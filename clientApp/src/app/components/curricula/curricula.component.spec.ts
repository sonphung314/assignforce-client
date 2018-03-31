import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculaComponent } from './curricula.component';
import { CoreComponent } from '../core/core.component';
import { FociComponent } from '../foci/foci.component';
import { SkillsComponent } from '../skills/skills.component';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Curriculum } from '../../model/Curriculum';
import { Observable } from 'rxjs/Observable';
import { CurriculaService } from '../../services/curricula/curricula.service';

describe('CurriculaComponent', () => {
  let component: CurriculaComponent;
  let fixture: ComponentFixture<CurriculaComponent>;
  const testData: Curriculum = new Curriculum(1, 'Test Curriculum', true, true, [
    { skillId: 1, name: 'Test Skill', active: true }
  ]);

  class MockCurriculaService {
    getCurricula() {}
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [CurriculaComponent, CoreComponent, FociComponent, SkillsComponent],
        providers: [{ provide: CurriculaService, useClass: MockCurriculaService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
