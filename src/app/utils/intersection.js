import { Subject, of } from "rxjs";
import { mergeMap } from "rxjs/operators";

export const registerScrollArea = (viewportEl = null) => {
  const subject = new Subject();
  const subscriber = new IntersectionObserver(
    (entries, observer) => subject.next({ entries, observer }),
    {
      root: viewportEl,
      rootMargin: "0px",
      threshold: 0.2
    }
  );

  return element => {
    subscriber.observe(element);
    return subject.asObservable().pipe(
      mergeMap(({ entries }) => {
        const entry = entries.filter(entry => entry.target === element);
        return of(entry.length && entry[0].isIntersecting);
      })
    );
  };
};
