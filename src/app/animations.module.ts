import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

export const slideInAnimation = 
  trigger('routeAnimations', [
    transition('* => Welcome', slideTo('left')),
    transition('CaseStudy => *', slideTo('left')),
    transition('* <=> *', slideTo('right'))
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ], optional),
    query(':leave', animateChild(),  optional),
    group([
      query(':leave', [
        animate('500ms ease-out', style({ [direction]: '100%'}))
      ],  optional),
      query(':enter', [
        animate('500ms ease-out', style({ [direction]: '0%'}))
      ],  optional)
    ]),
    query(':enter', animateChild(), optional)
  ]
}
