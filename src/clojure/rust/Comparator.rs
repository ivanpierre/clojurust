/// Comparator

use crate::*;

use_obj! {
    clojure::rust::Object;
    clojure::rust::IObject;
    clojure::rust::ObjResult;
}

init_obj! {
    Comparator {
        clojure::rust::Object::init();
        clojure::rust::IObject::init();
        clojure::rust::ObjResult::init();
    }
}

pub trait Comparator: IObject {
    /// AFunction -> Object -> Object -> int
    fn compare(o1: Object, o2: Object) -> i8;
}
