import React, { useState,useEffect } from 'react';

function Setting(props) {
  const [time, setTime] = useState(0);
  const [list, setList] = useState([
    {
      id:0,
      title:'1小时',
      time:60*60,
      checked:false,
      count:1
    }
    ,
    {
      id:1,
      title:'半小时',
      time:60*30,
      checked:false,
      count:1
    }
    ,
    {
      id:2,
      title:'10分钟',
      time:60*10,
      checked:false,
      count:1
    }
    ,
    {
      id:3,
      title:'5分钟',
      time:60*5,
      checked:false,
      count:1
    }
    ,
    {
      id:4,
      title:'1分钟',
      time:60,
      checked:false,
      count:1
    }
    ,
    {
      id:5,
      title:'10秒钟',
      time:10,
      checked:false,
      count:1
    }
    ,
    {
      id:6,
      title:'5秒钟',
      time:5,
      checked:false,
      count:1
    }
    ,
    {
      id:7,
      title:'1秒钟',
      time:1,
      checked:false,
      count:1
    }
  ]);
  useEffect(()=>{
    updatetime();
  },[])
  let getfulltime = (value) => {
    let result = parseInt(value);
    let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
    let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
    let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
    return `${h}小时${m}分${s}秒`;
  }
  const check=(e)=>{
    console.log('check');
    let id =e.target.id;
    let checked=e.target.checked;
    let arr = [...list];
    arr[id].checked=checked;//因为id就是序号
    setList(arr);
    updatetime();
  }
  const ok = () => {
    props.set(time);
  }
  const updatetime=()=>{
    console.log('updatetime')
    let t=0;
    list.map((item)=>{
      if(item.checked){
        console.log(item);
        t+=item.time*item.count; 
      }
    });
    console.log(t);
    setTime(t);
  }
  const add=(e)=>{
    let id =e.target.id;
    let arr = [...list];
    
    arr.map((item)=>{
      if(item.id==id){
        item.count+=1;
      }
    });
    setList(arr);
    updatetime();
  }
  const sub=(e)=>{
    let id =e.target.id;
    let arr = [...list];
    
    arr.map((item)=>{
      if(item.id==id){
        item.count-=1;
      }
    });
    setList(arr);
    updatetime();
  }
  return (
    <div className="setting">
      <div className="title">设置定时</div>
      <div className="list">
        {
          list.map((item)=>{
            return(
              <div className="listitem" key={item.id}>
                <input type="checkbox" id={item.id} onChange={check} checked={item.checked} />
                {item.title}
                <div className="count_cp">
                  <button id={item.id} onClick={add}>+</button>
                  {item.count}
                  <button id={item.id} onClick={sub}>-</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="pricetime">
        <span className="value">{getfulltime(time)}</span>
      </div>
      <button onClick={ok} className="yes">确定</button>
    </div>
  );
}

export default Setting;
