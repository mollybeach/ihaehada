<template>
<div id="header"> 
  <p class="logo">Logo</p>
  <ul class="nav">
       <!-- :key="headings.id">{{ sections | upcf }} </li>--> 
  </ul>
</div>
</template>

<script>
export default {
  name: 'Header',
 data() {
    return{
    headings: [
      //week1 : hello, to be, nice to meet you
      { id: "home", values: [{  
                                  header: "hello",
                                  
                              }] 
            },
      { id: "contact", values: [{  
                                  header: "contact",
                              }] 
            },
        { id: "about", values: [{  
                                    header: "about",
                                }] 
                },
          ]
        }

  },
  filters: {
    upc: function(value){
      return value.toUpperCase();
    },
    upcf: function(value){
      value = value.split(' ');
      value = value.map(function(value){
        return value.charAt(0).toUpperCase() + value.slice(1);
      });

      return value.join();
    }
    }
}

</script>
<style >

    
</style>
