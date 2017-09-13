import { HueControlModule } from './hue-control.module';

describe('HueControlModule', () => {
  let hueControlModule: HueControlModule;

  beforeEach(() => {
    hueControlModule = new HueControlModule();
  });

  it('should create an instance', () => {
    expect(hueControlModule).toBeTruthy();
  });
});
