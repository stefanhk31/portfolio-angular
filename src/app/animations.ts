import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

const optional = { optional: true };

export const slideInAnimation = 
  trigger('routeAnimations', [
    transition('* => Welcome', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ left: '-100%'})
      ], optional),
      query(':leave', animateChild(), optional),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ], optional),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ], optional)
      ]),
      query(':enter', animateChild(), optional),
    ]),
    transition('CaseStudy => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ left: '-100%'})
      ], optional),
      query(':leave', animateChild(), optional),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ], optional),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ], optional)
      ]),
      query(':enter', animateChild(), optional),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ right: '-100%'})
      ], optional),
      query(':leave', animateChild(), optional),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%'}))
        ], optional),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%'}))
        ], optional)
      ]),
      query(':enter', animateChild(), optional),
    ])
  ]);
