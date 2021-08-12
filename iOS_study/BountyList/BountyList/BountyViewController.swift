//
//  BountyViewController.swift
//  BountyList
//
//  Created by 김원희 on 2021/08/12.
//

import UIKit

class BountyViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    
    let nameList = ["brook", "chopper", "franky", "luffy", "nami", "sanji","zoro","robin"]
    let bountyList = [300000, 200000,12000,345000,50000000,4500000,760000,88000]

    
    //segue 수행전 실행되는 메소드
    override func prepare(for segue : UIStoryboardSegue, sender: Any?) {
     //DetailViewController로 데이터 넘기기
        if segue.identifier == "showDetail"{
         let vc =   segue.destination as? DetailViewController
            if let index = sender as? Int{
                vc?.name = nameList[index]
                vc?.bounty = bountyList[index]

            }
        }
    
    }
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

    }
    
    //UITableDataSource
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section : Int) -> Int {
        return bountyList.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) ->
    UITableViewCell {
//     guard   let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for : indexPath) as? ListCell else{
//            return UITableViewCell()
//        }
        
       // return cell
        
        //guard문과 같은 동작을 하는 if문
        if let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as? ListCell{
            let img = UIImage(named: "\(nameList[indexPath.row]).jpg")
            cell.imgView.image = img
            cell.nameLable.text = nameList[indexPath.row]
            cell.bountyLable.text = "\(bountyList[indexPath.row])"
            return cell
        }
        else{
            return UITableViewCell()
        }
        
    }
    
    //UITableView Delegate -> 클릭됐을 때 반응
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath){
        print("---> \(indexPath.row)")
        performSegue(withIdentifier: "showDetail", sender: indexPath.row)
    }
}




class ListCell: UITableViewCell {
    @IBOutlet weak var imgView: UIImageView!
    @IBOutlet weak var nameLable: UILabel!
    @IBOutlet weak var bountyLable: UILabel!
    
    
}
