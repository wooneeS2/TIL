//
//  DetailViewController.swift
//  BountyList
//
//  Created by 김원희 on 2021/08/12.
//

import UIKit

class DetailViewController: UIViewController {
    
    @IBOutlet weak var imgView: UIImageView!
    @IBOutlet weak var nameLable: UILabel!
    @IBOutlet weak var bountyLable: UILabel!

    
    var name : String?
    var bounty : Int?
    

    override func viewDidLoad() {
        super.viewDidLoad()
        updateUI()
        
        // Do any additional setup after loading the view.
    }
    

    func updateUI(){
        
        if let name = self.name, let bounty = self.bounty{
            let img = UIImage(named: "\(name).jpg")
            
            imgView.image = img
            nameLable.text = name
            bountyLable.text = "\(bounty)"

        }
        
            }
    
    
    
    
    @IBAction func close (_ sender: Any) {
        //창이꺼질 때
        //completion : 창이 꺼지고 실행되어야하는 동작
        dismiss(animated: true, completion: nil)
        
        
    }
    
}

