import React, {useState} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const FeedScreen = () => {

  const [statusUsers, setStatusUsers] = useState([
    { id: 1, name: 'User 1 large name', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
    { id: 2, name: 'User 2', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { id: 3, name: 'User lx name here', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { id: 4, name: 'User 2', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
    { id: 5, name: 'User 2', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
    { id: 6, name: 'User 2', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
    { id: 7, name: 'User 2', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
    { id: 8, name: 'User 2', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar8.png' },
    { id: 9, name: 'User 2', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
    { id: 10, name: 'User 2', avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
  ])

  const [posts, setPosts] = useState([
    {
      id: 1,
      userId: 1,
      username: 'User 1',
      avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      date: 'May 18, 2023',
      description: 'This is a post description',
      imageUrl: 'https://www.bootdey.com/image/580x520/FF00FF/000000',
    },
    {
      id: 2,
      userId: 2,
      username: 'User 2',
      avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      date: 'May 17, 2023',
      description: 'Another post',
      imageUrl: null,
    },

    {
      id: 3,
      userId: 1,
      username: 'User 1',
      avatarUrl: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      date: 'May 18, 2023',
      description: 'This is a post description',
      imageUrl: 'https://www.bootdey.com/image/580x520/32CD32/000000',
    },
  ])

  const UserListItem = ({ user }) => (
    <View style={styles.userItem}>
      <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      <Text style={styles.statusUserName} ellipsizeMode='tail' numberOfLines={1}>{user.name}</Text>
    </View>
  );
  
  const PostCard = ({ post }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{ uri: post.avatarUrl }} style={styles.postAvatar} />
        <Text style={styles.postUsername}>{post.username}</Text>
        <Text style={styles.postDate}>{post.date}</Text>
      </View>
      <Text style={styles.postDescription}>{post.description}</Text>
      {post.imageUrl && (
        <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      )}
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.postButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.userContainer}>
          {statusUsers.map(user => <UserListItem key={user.id} user={user} />)}
        </View>
      </ScrollView>

      <FlatList
        data={posts}
        contentContainerStyle={styles.postListContainer}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <PostCard post={item} />}

      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    paddingBottom:120,
  },
  userContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor:'#fff',
    height:100,
  },
  userItem: {
    marginRight: 10,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  statusUserName:{
    marginTop:5,
    fontSize:12,
    color:'#483D8B',
    width:60,
    textAlign:'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postListContainer:{
    paddingTop:20,
    paddingHorizontal:15,
  },
  postCard: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius:5,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  postAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  postUsername: {
    flex: 1,
  },
  postDate: {
    fontSize: 12,
    color:'#A9A9A9',
  },
  postDescription:{
    fontSize:16,
    color:'#00008B'
  },
  postImage: {
    marginTop: 10,
    width: '100%',
    height: 200,
  },
  postFooter: {
    flexDirection: 'row',
    marginTop: 10,
  },
  postButton: {
    marginRight: 10,
  },
  postButtonText:{
    color:'#808080'
  }
});

export default FeedScreen;

                                           