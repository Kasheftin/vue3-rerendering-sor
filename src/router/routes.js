import Home from '@/views/Home.vue'
import Examples from '@/views/Examples.vue'
import Example1p1 from '@/views/Example1p1.vue'
import Example1p2 from '@/views/Example1p2.vue'
import Example1p3 from '@/views/Example1p3.vue'
import Example1p4 from '@/views/Example1p4.vue'
import Example2p1 from '@/views/Example2p1.vue'
import Example2p2 from '@/views/Example2p2.vue'
import Example2p3 from '@/views/Example2p3.vue'
import Example2p4 from '@/views/Example2p4.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/examples',
    name: 'examples',
    component: Examples,
    children: [
      {
        path: '/example1p1',
        name: 'example1p1',
        component: Example1p1,
        meta: {
          title: 'Example 1.1. Dummy with prop1={a: 1} (static object) that is not shown in Dummy\'s template',
          description: `
[+vue2, +vue3]
It works correctly in vue2. Since prop1 is not shown in the template, rendering does not happen when the last changes.
It works correctly in vue3, but the reason is different: {a: 1} automatically cached in a separate computed and reused during parent component's render.
          `,
          instructions: `
Click on the button to increase the counter. Notice that Dummy does not trigger updated hook
          `
        }
      },
      {
        path: '/example1p2',
        name: 'example1p2',
        component: Example1p2,
        meta: {
          title: 'Example 1.2. Dummy with prop1={a: 1} (static object) that is shown in Dummy\'s template',
          description: `
[-vue2, +vue3]
It causes excessive rendering of Dummy despite the props looks to be the same.
It works correctly in vue3.
          `,
          instructions: `
Click on the button to increase the counter. Notice that Dummy triggers updated hook every time in vue2. It works correctly in vue3.
          `,
          explanation: `
Props that go to Dummy are not actually the same.
Every time the parent's component counter increases, it triggers render function to run.
Render function includes :prop1="{a: 1}".
Every time render function runs it creates a new {a: 1} object, then passes it to Dummy.
Since Dummy's render function depends on prop1 object, this new-but-still the same {a: 1} causes rerendering.
          `
        }
      },
      {
        path: '/example1p3',
        name: 'example1p3',
        component: Example1p3,
        meta: {
          title: 'Example 1.3. Dummy with dynamic prop1 that is not shown in Dummy\'s template',
          description: `
[+vue2, -vue3]
It works correctly in vue2 because prop1 is not shown in Dummy's template.
But it causes excessive rendering in vue3. Wrapping {a: counter ? 1 : 0} into computed does not help because counter triggers it to rerun and a new object is generated every time.
          `,
          instructions: `
Click on the button to increase the counter. Notice Dummy's updated hook is triggered with every counter increase in vue3. It works correctly in vue2.
          `,
          explanation: `
Dummy does not trigger updated hook in vue2 because prop1 is not used in the Dummy's template.
But the {a: counter ? 1 : 0} object is recreated every time, that's why Dummy's updated hook runs in vue3 every time.
          `
        }
      },
      {
        path: '/example1p4',
        name: 'example1p4',
        component: Example1p4,
        meta: {
          title: 'Example 1.4. Dummy with dynamic prop1 that is shown in Dummy\'s template',
          description: `
[-vue2, -vue3]
It does not work properly nor in vue2 neither in vue3.
          `,
          instructions: `
Click on the button to increase the counter. Notice there's Dummy's updated hook triggered every time in vue2 and in vue3.
          `,
          explanation: `
It causes rerendering in vue2 with the same reason as Example 1.2.
It causes rerendering in vue3 with the same reason as Example 1.3.
          `
        }
      },
      {
        path: '/example2p1',
        name: 'example2p1',
        component: Example2p1,
        meta: {
          title: 'Example 2.1. Users<->Tags list with only a first tag shown',
          description: `
[+vue2, +vue3]
It works properly in vue2 and vue3
          `,
          instructions: `
Manage user<->tag using checkboxes.
Notice the update happens intuitively and in a correct way: <UserWithFirstTag> is rerendered only if first tag really changes in vue2 and vue3.
          `,
          explanation: `
It works properly because the user and tags[0] objects sent to <UserWithFirstTag> are not recreated/changed in usersWithTags getter when new user-tag relation is created.
          `
        }
      },
      {
        path: '/example2p2',
        name: 'example2p2',
        component: Example2p2,
        meta: {
          title: 'Example 2.2. Users<->Tags with all the assigned tags shown for every user',
          description: `
[-vue2, -vue3]
Every new user-tag relation triggers all the <UserWithTags> components to rerender.
          `,
          instructions: `
Manage user<->tag using checkboxes.
Notice every checkbox change triggers all the <UserWithTags> components to update.
          `,
          explanation: `
This happens because userWithTags getter produces a new array consisting on new objects, every object has tags property that is a new array.
          `
        }
      },
      {
        path: '/example2p3',
        name: 'example2p3',
        component: Example2p3,
        meta: {
          title: 'Example 2.3 Users<->Tags with all the tags wrapped with SelectiveObjectReuse',
          description: `
[+vue2, +vue3]
The previous getter's value is caches by SelectiveObjectReuse.
When the new object is created, it's object-like parts smarterly replaced with the previously stored value.
          `
        }
      },
      {
        path: '/example2p4',
        name: 'example2p4',
        component: Example2p4,
        meta: {
          title: 'Example 2.4 Dummy with dynamic prop1 that is shown in Dummy\'s template + SelectiveObjectReuse',
          description: `
[+vue2, +vue3]
This is the updated Example 1.4 with the prop1 object wrapped with SelectiveObjectReuse. It works correctly in vue2 and vue3.
          `
        }
      }
    ]
  }
]
