const users = [
  {
  username: 'David',
  status: 'online',
  lastActivity: 10
  },
  {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
    }
    ]

    function onlineUser(users){
      let result =[]
      users.forEach(n => {
        if(n.status === 'online'){
          return result.push(n.username)
        }
      });
      return `Cейчас в онлайне:${result}`
    }
    console.log(onlineUser(users));