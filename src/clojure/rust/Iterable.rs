/// Iterable

use crate::*;

use_obj! {
    clojure::rust::Object;
    clojure::rust::IObject;
    clojure::rust::ObjResult;
    clojure::rust::Iterator;
}

init_obj! {
    Iterator {
        clojure::rust::Object::init();
        clojure::rust::IObject::init();
        clojure::rust::ObjResult::init();
        clojure::rust::Iterator::init();
    }
}

pub trait Iterable: IObject {
    /// Iterable -> Iterator
    fn iterator(&self) -> ObjResult<Object>;
}