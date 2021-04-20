//! Protocol Associative

use crate::*;

use_obj! {
    clojure::rust::Object;
    clojure::rust::ObjResult;
}

init_obj! {
    Associative {
        clojure::rust::Object::init();
        clojure::rust::ObjResult::init();
    }
}

pub trait Associative {
    /// Associative -> Object -> Object -> Associative
    fn assoc(&self, key: &Object, value: &Object) -> ObjResult<Object>;
    
    /// Associative -> Object -> bool
    fn containsKey(&self, key: &Object) -> ObjResult<bool>;

    /// Associative -> Object -> IMapEntry
    fn entryAt(&self, key: &Object) -> ObjResult<Object>;
}
