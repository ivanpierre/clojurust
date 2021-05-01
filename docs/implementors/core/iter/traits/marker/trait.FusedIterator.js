(function() {var implementors = {};
implementors["im"] = [{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/hashmap/struct.Iter.html\" title=\"struct im::hashmap::Iter\">Iter</a>&lt;'a, K, V&gt;","synthetic":false,"types":["im::hash::map::Iter"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/hashmap/struct.IterMut.html\" title=\"struct im::hashmap::IterMut\">IterMut</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["im::hash::map::IterMut"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/hashmap/struct.ConsumingIter.html\" title=\"struct im::hashmap::ConsumingIter\">ConsumingIter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: HashValue + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["im::hash::map::ConsumingIter"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/hashmap/struct.Keys.html\" title=\"struct im::hashmap::Keys\">Keys</a>&lt;'a, K, V&gt;","synthetic":false,"types":["im::hash::map::Keys"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/hashmap/struct.Values.html\" title=\"struct im::hashmap::Values\">Values</a>&lt;'a, K, V&gt;","synthetic":false,"types":["im::hash::map::Values"]},{"text":"impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/hashset/struct.Iter.html\" title=\"struct im::hashset::Iter\">Iter</a>&lt;'a, A&gt;","synthetic":false,"types":["im::hash::set::Iter"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/hashset/struct.ConsumingIter.html\" title=\"struct im::hashset::ConsumingIter\">ConsumingIter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["im::hash::set::ConsumingIter"]},{"text":"impl&lt;'a, A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/vector/struct.Iter.html\" title=\"struct im::vector::Iter\">Iter</a>&lt;'a, A&gt;","synthetic":false,"types":["im::vector::Iter"]},{"text":"impl&lt;'a, A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/vector/struct.IterMut.html\" title=\"struct im::vector::IterMut\">IterMut</a>&lt;'a, A&gt;","synthetic":false,"types":["im::vector::IterMut"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/vector/struct.ConsumingIter.html\" title=\"struct im::vector::ConsumingIter\">ConsumingIter</a>&lt;A&gt;","synthetic":false,"types":["im::vector::ConsumingIter"]},{"text":"impl&lt;'a, A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/vector/struct.Chunks.html\" title=\"struct im::vector::Chunks\">Chunks</a>&lt;'a, A&gt;","synthetic":false,"types":["im::vector::Chunks"]},{"text":"impl&lt;'a, A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"im/vector/struct.ChunksMut.html\" title=\"struct im::vector::ChunksMut\">ChunksMut</a>&lt;'a, A&gt;","synthetic":false,"types":["im::vector::ChunksMut"]}];
implementors["sized_chunks"] = [{"text":"impl&lt;A, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"sized_chunks/inline_array/struct.Iter.html\" title=\"struct sized_chunks::inline_array::Iter\">Iter</a>&lt;A, T&gt;","synthetic":false,"types":["sized_chunks::inline_array::iter::Iter"]},{"text":"impl&lt;'a, A, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"sized_chunks/inline_array/struct.Drain.html\" title=\"struct sized_chunks::inline_array::Drain\">Drain</a>&lt;'a, A, T&gt;","synthetic":false,"types":["sized_chunks::inline_array::iter::Drain"]},{"text":"impl&lt;A, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"sized_chunks/sized_chunk/struct.Iter.html\" title=\"struct sized_chunks::sized_chunk::Iter\">Iter</a>&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"sized_chunks/types/trait.ChunkLength.html\" title=\"trait sized_chunks::types::ChunkLength\">ChunkLength</a>&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":["sized_chunks::sized_chunk::iter::Iter"]},{"text":"impl&lt;'a, A, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"sized_chunks/sized_chunk/struct.Drain.html\" title=\"struct sized_chunks::sized_chunk::Drain\">Drain</a>&lt;'a, A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"sized_chunks/types/trait.ChunkLength.html\" title=\"trait sized_chunks::types::ChunkLength\">ChunkLength</a>&lt;A&gt; + 'a,&nbsp;</span>","synthetic":false,"types":["sized_chunks::sized_chunk::iter::Drain"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()