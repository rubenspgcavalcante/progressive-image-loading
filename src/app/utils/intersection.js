import {  Observable } from "rxjs/Observable";
import {  Subject } from "rxjs/Subject";

export const registerScrollArea = (viewportEl = null) => {
  const subject = new Subject();

  const subscriber = new IntersectionObserver(
    (entry, observer) => subject.next({
      entry,
      observer
    }), {
      root: viewportEl,
      rootMargin: '0px',
      threshold: 0.2
    }
  )

  return (subsribeEl) => {
    subscriber.observe(subsribeEl);
    return subject.asObservable();
  }
}