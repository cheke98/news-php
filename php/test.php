<?php
$id = $_POST['id'];
$array = [
  1 => "https://littlesaigontv.com/wp-content/uploads/2020/03/Marketplace-Lending-News.jpg",
  2 => "https://vdoogle.com/wp-content/uploads/2020/02/Pros-And-Cons-Of-Entertainment-News.jpg",
  3 => "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.asiannewshub.com%2Fbooth-capturing-by-supporters-of-pdp-leader-haq-khan%2F&psig=AOvVaw20JPN53t3JYJObGAFrrfgq&ust=1589570411009000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjjjbGJtOkCFQAAAAAdAAAAABAr",
  4 => "https://images.unsplash.com/photo-1588612568467-a6b245a1f4a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
  5 => "https://images.unsplash.com/photo-1589466725882-f47191476e8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
  6 => "https://images.unsplash.com/photo-1589451907336-7531424d8d34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  7 => "https://images.unsplash.com/photo-1589395937597-2f5e187f87f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80",
  8 => "https://images.unsplash.com/photo-1586726972122-f20f59d4bbb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  9 => "https://images.unsplash.com/photo-1573496130407-57329f01f769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  10 => "https://images.unsplash.com/photo-1508680086700-7c7530d767af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  11 => "https://images.unsplash.com/photo-1566955784571-ae9c02e82fc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
  12 => "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  13 => "https://images.unsplash.com/photo-1504583395652-c7793d4c8d06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  14 => "https://images.unsplash.com/photo-1544028358-9697462040e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
  15 => "https://images.unsplash.com/photo-1587391987496-a9fbc9fc6dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
  16 => "https://images.unsplash.com/photo-1588775286394-488d8cf1c8e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  17 => "https://images.unsplash.com/photo-1588615419957-bf66d53c6b49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
  18 => "https://images.unsplash.com/photo-1588898478463-4d477602d125?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  19 => "https://images.unsplash.com/photo-1588853112232-381fc22921cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=954&q=80",
  20 => "https://images.unsplash.com/photo-1541877717761-bae17660826b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2088&q=80"
];
$message = "Success";
    echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
?>